var express = require("express");
var router = express.Router();
const axios = require("axios");
const conversationRequestMoney = require("./conversations-request-money");
const base_url = process.env.BASE_URL;

const apiKey = process.env.API_KEY || '433a67884595beb77141a61adb1ddcb2012259c49d6e8e79da57b2f7eb6f6f84';
const username = process.env.USERNAME || 'Callcenter4CRM';
const phoneNumber = process.env.PHONE_NUMBER || '+254730731025';
const customerCareNumber = "+254701564702";

let lastRegisteredClient = `${username}`;
// /pesame/request-money
// make sure to add this route as your callbck url from the africastalking dashboard
router.post("/", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  callActions = conversationRequestMoney["1"]
  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});


router.post("/request-amount", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  callActions = conversationRequestMoney["1.1"]
  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});


router.post("/purpose", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  callActions = conversationRequestMoney["1.2"]
  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});


router.post("/confirm", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  callActions = conversationRequestMoney["1.3"]
  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});

router.post("/success", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  const clientDialedNumber = req.body.clientDialedNumber;
  callActions = conversationRequestMoney["1.4"]
  responseAction =
    '<?xml version="1.0" encoding="UTF-8"?><Response>' +
    `${callActions}` +
    "</Response>";
  res.send(responseAction);
});


module.exports = router;
