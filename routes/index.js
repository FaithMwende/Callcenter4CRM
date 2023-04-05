var express = require('express');
var router = express.Router();
const axios = require('axios');

const apiKey = '433a67884595beb77141a61adb1ddcb2012259c49d6e8e79da57b2f7eb6f6f84';
const username = 'Callcenter4CRM';
const phoneNumber = '+254730731025';

let lastRegisteredClient = `${username}.browser1`;

router.get('/', (req,res) => {
  res.render('index');
});


// used by browser to fetch token.
// the token is needed by the browser to initialize session
router.post('/capability-token', async (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));
    const params = {
        'clientName': req.body.clientName,
    }
    await capabilityToken(params)
    .then(token => {
        console.log(token)
        res.send(token);
    })
    .catch(error => {
        res.status(500).send(error.message);
    })
});




// make sure to add this route as your callbck url from the africastalking dashboard
router.post('https://784c-197-232-59-37.eu.ngrok.io/callback_url', (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));
    const clientDialedNumber = req.body.clientDialedNumber;
    if (req.body.clientDialedNumber){
    	// assumes a browser tried to make a call
    	callActions = `<Dial phoneNumbers="${clientDialedNumber}"/>`;
    }
    else {
    	// assumes virtual number was called so tries to route call to the last browser session
        callActions = `<Dial phoneNumbers="${lastRegisteredClient}"/>`;   
    }
    responseAction = '<?xml version="1.0" encoding="UTF-8"?><Response>' + `${callActions}` + '</Response>';
    res.send(responseAction);
});


// make sure to add this route as your events callbck url from the africastalking dashboard. 
// You can use this to monitor your events
router.post('https://784c-197-232-59-37.eu.ngrok.io/events_url', async (req, res) => {
    console.log({events: req.body});
});




/////////////////////////////////////utility functions///////////////////////////////////////////


const capabilityToken = async (params) => {
    let token;
    const url = 'https://webrtc.africastalking.com/capability-token/request';
    let data = {
        username,
        phoneNumber,
        'clientName': params.clientName || 'browser1',
        'incoming': 'true',
        'outgoing': 'true',
        'expire': '7200s'
    }
    console.log(data)
    if (data.username && data.clientName && data.phoneNumber ) {
    	// add apiKey here
        axios.defaults.headers.common['433a67884595beb77141a61adb1ddcb2012259c49d6e8e79da57b2f7eb6f6f84'] = apiKey;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        token = await axios({
            method: 'post',
            url,
            data
        })
        .then(response => {
            console.log({data:response.data})
            return response.data;
        })
        .catch(error => {
            console.log({error})
        });
    }
    console.log({token})
    return token;
}


module.exports = router;
