// Define the actions object
//require('dotenv').config();
const customerCareNumber = "+254701564702";
const base_url = process.env.BASE_URL;
const actions = {

  "2": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/send-money/amount">
           <Say>To Send Money Enter the Phone Number of the Recipient</Say>
         </GetDigits>`,
   "2.1": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/send-money/confirm">
              <Say>Enter the amount you want to send</Say>
            </GetDigits>`,
   "2..1.1": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/send-money/success">
                 <Say>Your About to Send Kenya Shilling 3000 To 0726339983. To Confirm press 1 . To Decline Press 2)</Say>
               </GetDigits>`,
    "2.2": `<Say>Your Request Has been successfully been process. Thank you for Using pesaMe Finacial AI Voice Service.</Say>`,

  "0": `<Dial phoneNumbers="${customerCareNumber}"/>`
};

// Export the actions object
module.exports = actions;