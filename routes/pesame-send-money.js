var express = require("express");
var router = express.Router();
const axios = require("axios");
const actions = require("./conversation-my-account");
const conversationMainInput = require("./conversations-main-input");
const apiKey =
  "433a67884595beb77141a61adb1ddcb2012259c49d6e8e79da57b2f7eb6f6f84";
const username = "Callcenter4CRM";
const phoneNumber = "+254730731025";
const customerCareNumber = "+254701564702";
let lastRegisteredClient = `${username}`;
///send-money
router.post("/phonenumber", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;
  console.log("dtmfDigits: " + dtmfDigits);

  callActions = conversationMainInput["2"];

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

  callActions = conversationMainInput["2.1"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});

// make sure to add this route as your callbck url from the africastalking dashboard
router.post("/confirm", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  const dtmfDigits = req.body.dtmfDigits;
  console.log("Amount dtmfDigits: " + dtmfDigits);

  callActions = conversationMainInput["2.2"];

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

  callActions = conversationMainInput["2.3"];

  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});
module.exports = router;
