

// Define the actions object
//require('dotenv').config();
const customerCareNumber = "+254701564702";
const base_url = process.env.BASE_URL;
const actions = {
  //Till Number
  "2": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/till-number/till-amount">
          <Say>Enter Till number</Say>
          </GetDigits>
          <Say>We did not get your account number. Good bye</Say>`,
  "2.1": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/till-number/confirm-till-number">
          <Say>Enter Amount </Say>
          </GetDigits>
            <Say>We did not get your account number. Good bye</Say>`,
  "2.1.1": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/till-number/success">
           <Say>You are about to pay Ksh. 100 to Till number 007. Press 1 to confirm. Press 2 to decline.</Say>
           </GetDigits>
          <Say>We did not get your account number. Good bye</Say>`,
  "2.2": `<Say>Your Request Has been successfully been processed. Thank you for Using pesaMe Finacial AI Voice Service.</Say>`,

  "0": `<Dial phoneNumbers="${customerCareNumber}"/>`
};

// Export the actions object
module.exports = actions;

