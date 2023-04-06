var express = require('express');
var router = express.Router();
var dbConn = require("../lib/db");
const axios = require('axios');

const apiKey = '433a67884595beb77141a61adb1ddcb2012259c49d6e8e79da57b2f7eb6f6f84';
const username = 'Callcenter4CRM';
const phoneNumber = '+254730731025';

let lastRegisteredClient = `${username}`;

router.get('/', (req,res) => {
  res.render('index');
});

router.get('/wig', (req,res) => {
    res.render('widget');
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
router.post('/callback_url', (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));
    const clientDialedNumber = req.body.clientDialedNumber;
    if (req.body.clientDialedNumber){
    	// assumes a browser tried to make a call
    	callActions = `<Dial phoneNumbers="${clientDialedNumber}"/>`;

//    	dbConn.query(
//                    "SELECT * from users  WHERE phone  ="+phoneNumber+" and  activation_stage != 'PENDING_REGISTRATION' ",
//                    function(err, rows, fields) {
//                      console.log("======================"+rows.length);
//                      // console.log(userInfo);
//
//                    }
//                  );
    }


    else {
    	// assumes virtual number was called so tries to route call to the last browser session
    	console.log("===========Incoming call");
// callActions = `<Dial phoneNumbers="+254730731025"/>`;
//        callActions = `<Dial phoneNumbers="+254708650590"/>`;
//        callActions = `<Say>Welcome to Pettans College, Press 1 to talk to one of our representatives</Say>`
       callActions =  `<GetDigits timeout="300" finishOnKey="#" callbackUrl="https://9dc0-41-80-112-84.eu.ngrok.io/call_wife">
                
               <Say>Thanks you  calling Petanns Institute of Business Studies .For New Inquiries Press zero,For  Student Inquiries Press one,Press Zero to speaks to one of our preventatives.</Say>
           </GetDigits>
           <Say>We did not get your account number. Good bye</Say>`
//        `<Dial phoneNumbers="${lastRegisteredClient}"/>`;
    }
    responseAction = '<?xml version="1.0" encoding="UTF-8"?><Response>' + `${callActions}` + '</Response>';
    res.send(responseAction);
});


// make sure to add this route as your events callbck url from the africastalking dashboard. 
// You can use this to monitor your events
router.post('/events_url', async (req, res) => {
console.log("events===========Incoming call");
    console.log({events: req.body});
});

router.post('/call_wife', async (req, res) => {
console.log("call_wife events===========Incoming call");
// Read the dtmf digits
   const accountNumber = req.body.dtmfDigits;
   console.log("account number is: "+accountNumber);

    console.log({events: req.body});
     callActions = `<Dial phoneNumbers="+254708650590"/>`;
     responseAction = '<?xml version="1.0" encoding="UTF-8"?><Response>' + `${callActions}` + '</Response>';
         res.send(responseAction);
});




/////////////////////////////////////utility functions///////////////////////////////////////////


const capabilityToken = async (params) => {
    let token;
    const url = 'https://webrtc.africastalking.com/capability-token/request';
    let data = {
        username,
        phoneNumber,
        'clientName': params.clientName,
        'incoming': 'true',
        'outgoing': 'true',
        'expire': '72000s'
    }
    console.log(data)
    if (data.username && data.clientName && data.phoneNumber ) {
    	// add apiKey here
        axios.defaults.headers.common['apiKey'] = apiKey;
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
