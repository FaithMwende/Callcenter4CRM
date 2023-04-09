var express = require("express");
var router = express.Router();
var dbConn = require("../lib/db");
const readline = require("readline");
var Call_Logs = require("../models/call_log");
const axios = require("axios");
const apiKey =
  "433a67884595beb77141a61adb1ddcb2012259c49d6e8e79da57b2f7eb6f6f84";
const username = "Callcenter4CRM";
const phoneNumber = "+254730731025";

const conversationMainInput = require("./conversations-main-input");

let lastRegisteredClient = `${username}`;

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/wig", (req, res) => {
  res.render("widget");
});

// used by browser to fetch token.
// the token is needed by the browser to initialize session
router.post("/capability-token", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const params = {
    clientName: req.body.clientName
  };
  await capabilityToken(params)
    .then(token => {
      console.log(token);
      res.send(token);
    })
    .catch(error => {
      res.status(500).send(error.message);
    });
});

// make sure to add this route as your callbck url from the africastalking dashboard
router.post("/callback_url", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  if (req.body.clientDialedNumber) {
    // assumes a browser tried to make a call
    callActions = `<Dial phoneNumbers="${clientDialedNumber}"/>`;
    const data = req.body;
    try {
      const call = await Call_Logs.create(data);
    } catch (err) {
      console.error(err);
    }
  } else {
    // assumes virtual number was called so tries to route call to the last browser session
    console.log("===========Incoming call");
    const data = req.body;
    try {
      const call = await Call_Logs.create(data);
    } catch (err) {
      console.error(err);
    }
    callActions = conversationMainInput["00"];
  }
  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});

router.delete("/api/call-logs/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const callLog = await Call_Logs.findByPk(id);
    if (!callLog) {
      res.status(404).send("Call log not found");
      return;
    }
    await callLog.destroy();
    res.send("Call log deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting call log from MySQL using Sequelize");
  }
});

router.delete("/api/call-logs", async (req, res) => {
  try {
    // Send a confirmation message to the client
    res.send(
      'Are you sure you want to delete all call logs? Type "DELETE" to confirm.'
    );

    // Wait for the user to confirm the deletion
    const data = await new Promise(resolve => {
      // Create a new readline interface to read user input from the console
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      // Listen for the user's input and resolve the promise with the result
      rl.on("line", input => {
        rl.close();
        resolve(input);
      });
    });

    // Check if the user confirmed the deletion
    if (data !== "DELETE") {
      console.log("Call log deletion aborted");
      return;
    }

    // Delete all call logs from the database
    await Call_Logs.destroy({
      where: {},
      truncate: true
    });

    console.log("All call logs deleted successfully");
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("Error deleting all call logs from MySQL using Sequelize");
  }
});

// make sure to add this route as your events callbck url from the africastalking dashboard.
// You can use this to monitor your events
router.post("/events_url", async (req, res) => {
  console.log("events===========Incoming call");
  console.log({ events: req.body });
});

router.post("/call_another", async (req, res) => {
  // Read the dtmf digits
  const accountNumber = req.body.dtmfDigits;
  console.log("account number is: " + accountNumber);

  console.log({ events: req.body });
  callActions = `<Dial phoneNumbers="+254708650590"/>`;
  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});

router.post("/api/call-log", async (req, res) => {
  const data = req.body;

  try {
    const call = await Call_Logs.create(data);
    res.send("Data saved to MySQL using Sequelize");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving data to MySQL using Sequelize");
  }
});
router.get("/api/call-logs", async (req, res) => {
  try {
    const callLogs = await Call_Logs.findAll();
    res.json(callLogs);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("Error retrieving call logs from MySQL using Sequelize");
  }
});

router.post("/api/call_logi", (req, res) => {
  const data = req.body;

  pool.getConnection((err, connection) => {
    if (err) throw err;

    const sql = `INSERT INTO your_table (amount, destinationNumber, sessionId, durationInSeconds, status, callerNumber, callStartTime, callSessionState, callerCarrierName, direction, callerCountryCode, isActive, currencyCode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      data.amount,
      data.destinationNumber,
      data.sessionId,
      data.durationInSeconds,
      data.status,
      data.callerNumber,
      data.callStartTime,
      data.callSessionState,
      data.callerCarrierName,
      data.direction,
      data.callerCountryCode,
      data.isActive,
      data.currencyCode
    ];

    connection.query(sql, values, (err, result) => {
      connection.release();

      if (err) throw err;

      res.send("Data saved to MySQL");
    });
  });
});

/////////////////////////////////////utility functions///////////////////////////////////////////

const capabilityToken = async params => {
  let token;
  const url = "https://webrtc.africastalking.com/capability-token/request";
  let data = {
    username,
    phoneNumber,
    clientName: params.clientName,
    incoming: "true",
    outgoing: "true",
    expire: "72000s"
  };
  console.log(data);
  if (data.username && data.clientName && data.phoneNumber) {
    // add apiKey here
    axios.defaults.headers.common["apiKey"] = apiKey;
    axios.defaults.headers.post["Content-Type"] = "application/json";
    token = await axios({
      method: "post",
      url,
      data
    })
      .then(response => {
        console.log({ data: response.data });
        return response.data;
      })
      .catch(error => {
        console.log({ error });
      });
  }
  console.log({ token });
  return token;
};

module.exports = router;
