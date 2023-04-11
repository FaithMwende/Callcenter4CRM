var express = require("express");
var router = express.Router();
const axios = require("axios");
const conversationSendMoney = require("./conversations-send-money");
const actions = require("./conversations-send-money");



const apiKey =
  "433a67884595beb77141a61adb1ddcb2012259c49d6e8e79da57b2f7eb6f6f84";
const username = "Callcenter4CRM";
const phoneNumber = "+254730731025";
const customerCareNumber = "+254701564702";
let lastRegisteredClient = `${username}`;


router.post("/-voice-input", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  if (req.body.clientDialedNumber) {
    // assumes a browser tried to make a call
    callActions = `<Dial phoneNumbers="${clientDialedNumber}"/>`;
  } else {
    const actionType = req.body.dtmfDigits;

    if (actionType == 1) {
         callActions = conversationMainInput["1"];
       } else if (actionType == 2) {
         callActions = conversationMainInput["2"];
       } else if (actionType == 3) {
         callActions = conversationMainInput["3"];
       } else if (actionType == 4) {
         callActions = conversationMainInput["4"];
       } else if (actionType == 5) {
         callActions = conversationMainInput["5"];
       } else if (actionType == 0) {
         callActions = conversationMainInput["0"];
       }
  }
  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});
///send-money
router.post("/utilities", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;
  console.log("dtmfDigits: " + dtmfDigits);

  callActions = conversationSendMoney["1"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});

// PHONE NUMBER
router.post("/mobile-number", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;
  console.log("Phone Number dtmfDigits: " + dtmfDigits);

  callActions = conversationSendMoney["2"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});
// make sure to add this route as your callbck url from the africastalking dashboard
router.post("/amount", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;
  console.log("Phone Number dtmfDigits: " + dtmfDigits);

  callActions = conversationSendMoney["2.1"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});

// make sure to add this route as your callbck url from the africastalking dashboard
router.post("/confirm-send-money", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;
  console.log("Amount dtmfDigits: " + dtmfDigits);

  callActions = conversationSendMoney["2.1.1"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});

// make sure to add this route as your callbck url from the africastalking dashboard
router.post("/success", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;

  callActions = conversationMainInput["2.2"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});
module.exports = router;
