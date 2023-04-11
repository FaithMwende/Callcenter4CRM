// Define the actions object
const customerCareNumber = "+254701564702";
const base_url = "https://792a-197-232-59-37.ngrok-free.app";
const actions = {
  "00": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/validate-pin">
         <Say>Welcome To PesaMe Financial AI Voice Service, Enter your Pin followed  by the hash sign</Say>
         </GetDigits>
       <Say>We did not get your account number. Good bye</Say>`,
  "1": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/request-money/request-amount">
           <Say>To request for Money Enter the Phone Number to request from</Say>
         </GetDigits>`,
   "1.1": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/request-money/purpose">
              <Say>Enter the amount you want to request</Say>
            </GetDigits>`,

   "1.2": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/request-money/confirm">
            <Say>Select the purpose of your request</Say>
          </GetDigits>`,  

   "1.3": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/request-money/success">
                 <Say>Your About to request Kenya Shilling 3000 from 0726339983. To Confirm press 1 . To Decline Press 2)</Say>
               </GetDigits>`,
    "2": `<Say>Your Request Has been successfully been processed. Thank you for Using pesaMe Finacial AI Voice Service.</Say>`,
 
  "0": `<Dial phoneNumbers="${customerCareNumber}"/>`
};

// Export the actions object
module.exports = actions;

