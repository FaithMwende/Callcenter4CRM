var express = require("express");
var router = express.Router();
const axios = require("axios");

const apiKey = process.env.API_KEY ;
const username = process.env.USERNAME ;
const phoneNumber = process.env.PHONE_NUMBER ;
const base_url = process.env.BASE_URL;
const NODE_ENV = process.env.NODE_ENV;

const customerCareNumber = "+254701564702";
const conversationMainInput = require("./conversations-main-input");
const conversationSendMoney = require("./conversations-send-money");
const conversationRequestMoney = require("./conversations-request-money");
const conversationPayments = require("./conversations-payments");
const conversationMyAccount = require("./conversation-my-account");

let lastRegisteredClient = `${username}`;


console.log(`API key: ${apiKey}`);
console.log(`Username: ${username}`);
console.log(`Phone number: ${phoneNumber}`);
console.log(`NODE_ENV: ${NODE_ENV}`)

// make sure to add this route as your callbck url from the africastalking dashboard
router.post("/", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  if (req.body.clientDialedNumber) {
    // assumes a browser tried to make a call
    callActions = `<Dial phoneNumbers="${clientDialedNumber}"/>`;
  } else {
    callActions = conversationMainInput["00"];
  }
  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});

router.post("/validate-pin", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  if (req.body.clientDialedNumber) {
    // assumes a browser tried to make a call
    callActions = `<Dial phoneNumbers="${clientDialedNumber}"/>`;
  } else {
    callActions = conversationMainInput["02"];
  }
  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});

//Main Voice Interface

router.post("/main-voice", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  if (req.body.clientDialedNumber) {
    // assumes a browser tried to make a call
    callActions = `<Dial phoneNumbers="${clientDialedNumber}"/>`;
  } else {
    callActions =  conversationMainInput["02"];
  }
  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});

/////////////////////////////////////utility functions///////////////////////////////////////////

router.post("/main-voice-input", async (req, res) => {
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

module.exports = router;
