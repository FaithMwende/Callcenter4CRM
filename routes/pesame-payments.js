var express = require("express");
var router = express.Router();
const axios = require("axios");
const conversationMainInput = require("./conversations-main-input");
const paymentAction = require("./conversations-payments");
const actions = require("./conversations-payments");

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
///MainPayments 
router.post("/utilities", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;
  console.log("dtmfDigits: " + dtmfDigits);

  callActions = paymentAction["1"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});

//Buy airtime
// make sure to add this route as your callbck url from the africastalking dashboard
router.post("/amount", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;
  console.log("Phone Number dtmfDigits: " + dtmfDigits);

  callActions = paymentAction["1.1"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});

// make sure to add this route as your callbck url from the africastalking dashboard
router.post("/confirm-buy-airtime", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;
  console.log("Amount dtmfDigits: " + dtmfDigits);

  callActions = paymentAction["1.1.1"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
  
});

//BUY TOKENS
// make sure to add this route as your callbck url from the africastalking dashboard
router.post("/meter-number", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;
  console.log("Phone Number dtmfDigits: " + dtmfDigits);

  callActions = paymentAction["1.2"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});

router.post("/amount", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;
  console.log("Phone Number dtmfDigits: " + dtmfDigits);

  callActions = paymentAction["1.2.1"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});


// make sure to add this route as your callbck url from the africastalking dashboard
router.post("/confirm-buy-tokens", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;
  console.log("Amount dtmfDigits: " + dtmfDigits);

  callActions = paymentAction["1.2.3"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});


//TILL NUMBER
// make sure to add this route as your callbck url from the africastalking dashboard
router.post("/till-number", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;
  console.log("Phone Number dtmfDigits: " + dtmfDigits);

  callActions = paymentAction["2"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});

router.post("/amount", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;
  console.log("Phone Number dtmfDigits: " + dtmfDigits);

  callActions = paymentAction["2.1"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});


// make sure to add this route as your callbck url from the africastalking dashboard
router.post("/confirm-till", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;
  console.log("Amount dtmfDigits: " + dtmfDigits);

  callActions = paymentAction["2.1.1"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});


//PAYBILL NUMBER
// make sure to add this route as your callbck url from the africastalking dashboard
router.post("/paybill-number", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;
  console.log("Phone Number dtmfDigits: " + dtmfDigits);

  callActions = paymentAction["3"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});


router.post("/paybill-account", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;
  console.log("Phone Number dtmfDigits: " + dtmfDigits);

  callActions = paymentAction["3.1"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});


router.post("/amount", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;
  console.log("Phone Number dtmfDigits: " + dtmfDigits);

  callActions = paymentAction["3.1.1"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});


// make sure to add this route as your callbck url from the africastalking dashboard
router.post("/confirm-paybill", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;
  console.log("Amount dtmfDigits: " + dtmfDigits);

  callActions = paymentAction["3.1.1.1"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});


// ALL Payments Success
//make sure to add this route as your callbck url from the africastalking dashboard
router.post("/success", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;

  callActions = paymentAction["4"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});
module.exports = router;
