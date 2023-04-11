// Define the actions object
const customerCareNumber = "+254701564702";
const base_url = "https://792a-197-232-59-37.ngrok-free.app";
const actions = {
  "00": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/validate-pin">
         <Say>Welcome To PesaMe Financial AI Voice Service, Enter your Pin followed  by the hash sign</Say>
         </GetDigits>
       <Say>We did not get your account number. Good bye</Say>`,
  "1": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/validate-pin">
                <Say>Press 1 for Buy Airtime. Press 2 to buy Tokens</Say>
                </GetDigits>
              <Say>We did not get your account number. Good bye</Say>`,
  //Buy airtime        
  "1.1": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/payments/confirm-buy-airtime">
                       <Say>Enter Amount you Want to buy</Say>
                       </GetDigits>
                     <Say>We did not get your account number. Good bye</Say>`,

  "1.1.1": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/payments/success">
                               <Say>You are about to buy Ksh. 100 of airtime. Press 1 to confirm. Press 2 to decline.followed  by the hash sign</Say>
                               </GetDigits>
                             <Say>We did not get your account number. Good bye</Say>`,
  //Buy Tokens
  "1.2": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/payments/amount">
                       <Say>Enter meter number</Say>
                       </GetDigits>
                     <Say>We did not get your account number. Good bye</Say>`,
  "1.2.1": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/payments/confirm-buy-tokens">
                       <Say>Enter Amount you Want to buy</Say>
                       </GetDigits>
                     <Say>We did not get your account number. Good bye</Say>`,
  "1.2.3": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/payments/success">
                               <Say>You are about to buy Ksh. 100 of tokens. Press 1 to confirm. Press 2 to decline.</Say>
                               </GetDigits>
                             <Say>We did not get your account number. Good bye</Say>`,
                         
  //Till Number
  "2": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/payments/amount">
                       <Say>Enter Till number</Say>
                       </GetDigits>
                     <Say>We did not get your account number. Good bye</Say>`,
  "2.1": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/payments/confirm-till">
                       <Say>Enter Amount </Say>
                       </GetDigits>
                     <Say>We did not get your account number. Good bye</Say>`,
  "2.1.1": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/payments/success">
                               <Say>You are about to pay Ksh. 100 to Till number 007. Press 1 to confirm. Press 2 to decline.</Say>
                               </GetDigits>
                             <Say>We did not get your account number. Good bye</Say>`,
 
  //Paybill Number
  "3": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/payments/paybill-account">
              <Say>Enter Paybill number</Say>
              </GetDigits>
              <Say>We did not get your account number. Good bye</Say>`,
  "3.1": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/payments/paybill-amount">
              <Say>Enter Account</Say>
              </GetDigits>
              <Say>We did not get your account number. Good bye</Say>`,

  "3.1.1": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/payments/paybill-confirm">
              <Say>Enter Amount to pay</Say>
              </GetDigits>
              <Say>We did not get your account number. Good bye</Say>`,

  "3.1.1.1": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/payments/success">
              <Say>You are about to pay Ksh. 100 to Faith Enterprises. Press 1 to confirm. Press 2 to decline.</Say>
              </GetDigits>
            <Say>We did not get your account number. Good bye</Say>`,
  "4": `<Say>Your Request Has been successfully been processed. Thank you for Using pesaMe Finacial AI Voice Service.</Say>`,


  "0": `<Dial phoneNumbers="${customerCareNumber}"/>`
};

// Export the actions object
module.exports = actions;
