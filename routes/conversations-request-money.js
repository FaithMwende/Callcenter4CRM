// Define the actions object
//require('dotenv').config();
const customerCareNumber = "+254701564702";
const base_url = process.env.BASE_URL;
const actions = {

  "1": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/request-money/request-amount">
           <Say>To request for Money Enter the Phone Number to request from</Say>
         </GetDigits>`,
   "1.1": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/request-money/purpose">
              <Say>Enter the amount you want to request</Say>
            </GetDigits>`,

   "1.2": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/request-money/confirm">
            <Say>Select the purpose of your request: For Groceries Press 1.</Say>
          </GetDigits>`,

   "1.3": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/request-money/success">
                 <Say>Your About to request Kenya Shilling 3000 from 0726339983. To Confirm press 1 . To Decline Press 2)</Say>
               </GetDigits>`,
    "1.4": `<Say>Your Request Has been successfully been processed. Thank you for Using pesaMe Finacial AI Voice Service.</Say>`,

  "0": `<Dial phoneNumbers="${customerCareNumber}"/>`
};

// Export the actions object
module.exports = actions;