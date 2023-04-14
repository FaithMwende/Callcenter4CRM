var express = require("express");
var router = express.Router();
const axios = require("axios");
const actions = require("./conversation-my-account");
const conversationMainInput = require("./conversations-main-input");
const base_url = process.env.BASE_URL;

const apiKey = process.env.API_KEY || '433a67884595beb77141a61adb1ddcb2012259c49d6e8e79da57b2f7eb6f6f84';
const username = process.env.USERNAME || 'Callcenter4CRM';
const phoneNumber = process.env.PHONE_NUMBER || '+254730731025';
const customerCareNumber = "+254701564702";

let lastRegisteredClient = `${username}`;
//
//// make sure to add this route as your callbck url from the africastalking dashboard
//router.post("/", async (req, res) => {
//  console.log(JSON.stringify(req.body, null, 2));
//  const clientDialedNumber = req.body.clientDialedNumber;
//  if (req.body.clientDialedNumber) {
//    // assumes a browser tried to make a call
//    callActions = `<Dial phoneNumbers="${clientDialedNumber}"/>`;
//  } else {
//    callActions = `<GetDigits timeout="300" finishOnKey="#" callbackUrl="https://9dc0-41-80-112-84.eu.ngrok.io/pesame/validate-pin">
//            <Say>Welcome To PesaMe Financial AI Voice Service, Enter your Pin followed  by the hash sign</Say>
//           </GetDigits>
//           <Say>We did not get your account number. Good bye</Say>`;
//  }
//  responseAction =
//    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
//    `${callActions}` +
//    "</Response>";
//  res.send(responseAction);
//});
//
//router.post("/validate-pin", async (req, res) => {
//  console.log(JSON.stringify(req.body, null, 2));
//  const clientDialedNumber = req.body.clientDialedNumber;
//  if (req.body.clientDialedNumber) {
//    // assumes a browser tried to make a call
//    callActions = `<Dial phoneNumbers="${clientDialedNumber}"/>`;
//  } else {
//    callActions = `<Record finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="https://9dc0-41-80-112-84.eu.ngrok.io/pesame/main-voice">
//                          		  <Say>Repeat this words for your voice Password. My voice is my password.</Say>
//                         </Record>`;
//  }
//  responseAction =
//    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
//    `${callActions}` +
//    "</Response>";
//  res.send(responseAction);
//});
//
////Main Voice Interface
//
//router.post("/main-voice", async (req, res) => {
//  console.log(JSON.stringify(req.body, null, 2));
//  const clientDialedNumber = req.body.clientDialedNumber;
//  if (req.body.clientDialedNumber) {
//    // assumes a browser tried to make a call
//    callActions = `<Dial phoneNumbers="${clientDialedNumber}"/>`;
//  } else {
//    callActions = `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="https://9dc0-41-80-112-84.eu.ngrok.io/pesame/main-voice-input">
//                          		  <Say>Thank you . For My account press 1. To send money press 2. To Request for Money press 3. To Make Payment Press 4. For Loans and Savings Press 5. Press 0 To Speak to Customer Care</Say>
//                         </GetDigits>`;
//  }
//  responseAction =
//    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
//    `${callActions}` +
//    "</Response>";
//  res.send(responseAction);
//});

/////////////////////////////////////utility functions///////////////////////////////////////////

router.post("/", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  if (req.body.clientDialedNumber) {
    // assumes a browser tried to make a call
    callActions = `<Dial phoneNumbers="${clientDialedNumber}"/>`;
  } else {
    const accountNumber = req.body.dtmfDigits;
    console.log(accountNumber); // or do something else with it

    if (accountNumber == 1) {
      callActions = conversationMainInput["1"];
    } else if (accountNumber == 2) {
      callActions = conversationMainInput["2"];
    } else if (accountNumber == 3) {
      callActions = conversationMainInput["3"];
    } else if (accountNumber == 4) {
      callActions = conversationMainInput["4"];
    } else if (accountNumber == 5) {
      callActions = conversationMainInput["5"];
    } else if (accountNumber == 0) {
      callActions = conversationMainInput["0"];
    }
  }
  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});

router.post("/myaccount-voice-input", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  if (req.body.clientDialedNumber) {
    // assumes a browser tried to make a call
    callActions = `<Dial phoneNumbers="${clientDialedNumber}"/>`;
  } else {
    const accountNumber = req.body.dtmfDigits;
    console.log(accountNumber); // or do something else with it

    if (accountNumber == 1) {
      callActions = actions["1"];
    } else if (accountNumber == 2) {
      callActions = actions["2"];
    } else if (accountNumber == 3) {
      callActions = actions["3"];
    } else if (accountNumber == 4) {
      callActions = actions["4"];
    } else if (accountNumber == 5) {
      callActions = actions["5"];
    } else if (accountNumber == 0) {
      callActions = actions["0"];
    }
  }
  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});

module.exports = router;
