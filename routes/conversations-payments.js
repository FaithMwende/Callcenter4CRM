// Define the actions object
const customerCareNumber = "+254701564702";
const base_url = "https://3459-41-80-115-45.ngrok-free.app";
const actions = {
  "00": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/validate-pin">
         <Say>Welcome To PesaMe Financial AI Voice Service, Enter your Pin followed  by the hash sign</Say>
         </GetDigits>
       <Say>We did not get your account number. Good bye</Say>`,
       "1": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/validate-pin">
                <Say>Press 1 for Buy Airtime. Press 2 to buy Tokens</Say>
                </GetDigits>
              <Say>We did not get your account number. Good bye</Say>`,
       "1.1": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/payments/confirm-buy-airtime">
                       <Say>Enter Amount you Want to buys</Say>
                       </GetDigits>
                     <Say>We did not get your account number. Good bye</Say>`,
        "1.1.1": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/validate-pin">
                               <Say>You are about to buy Ksh. 100 of airtime. Press 1 to confirm. Press 2 to decline.followed  by the hash sign</Say>
                               </GetDigits>
                             <Say>We did not get your account number. Good bye</Say>`,
       "1.2": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/validate-pin">
                       <Say>Press 1 for Buy Airtime. Press 2 to buy Tokens</Say>
                       </GetDigits>
                     <Say>We did not get your account number. Good bye</Say>`,

  "0": `<Dial phoneNumbers="${customerCareNumber}"/>`
};

// Export the actions object
module.exports = actions;
