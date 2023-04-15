// Define the actions object
//require('dotenv').config();
const customerCareNumber = "+254701564702";
const base_url = process.env.BASE_URL;
const actions = {
  //LoansAndSavings
  "1": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/loans-and-savings/success">
          <Say>Enter amount to send to Mshwari</Say>
          </GetDigits>
          <Say>We did not get your account number. Good bye</Say>`,

 "2": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/loans-and-savings/success">
          <Say>Enter amount to withdraw from Mshwari</Say>
          </GetDigits>
          <Say>We did not get your account number. Good bye</Say>`,

  "3": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/loans-and-savings/success">
          <Say>To open a lock savings account press 1. To save in a lock savings account press 2. To withdraw from a lock savings account press 3. To check your minibalance press 4 and for a ministatement press 5. </Say>
          </GetDigits>
          <Say>We did not get your account number. Good bye</Say>`,

 "4": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/loans-and-savings/success">
          <Say>Enter amount of loan you wish to borrow</Say>
          </GetDigits>
          <Say>We did not get your account number. Good bye</Say>`,

 "5": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/loans-and-savings/success">
          <Say>Check you balance</Say>
          </GetDigits>
          <Say>We did not get your account number. Good bye</Say>`,

 "6": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/loans-and-savings/success">
          <Say>Get your ministatement</Say>
          </GetDigits>
          <Say>We did not get your account number. Good bye</Say>`,

    "7": `<Say>Your Request Has been successfully been processed. Thank you for Using pesaMe Finacial AI Voice Service.</Say>`,
        
  "0": `<Dial phoneNumbers="${customerCareNumber}"/>`
};

// Export the actions object
module.exports = actions;
