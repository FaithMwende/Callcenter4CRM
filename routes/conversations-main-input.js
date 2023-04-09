// Define the actions object
const customerCareNumber = "+254701564702";
const base_url = "https://3459-41-80-115-45.ngrok-free.app";
const actions = {
  "00": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/validate-pin">
         <Say>Welcome To PesaMe Financial AI Voice Service, Enter your Pin followed  by the hash sign</Say>
         </GetDigits>
       <Say>We did not get your account number. Good bye</Say>`,
  "01": `<Record finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/main-voice">
          <Say>Repeat this words for your voice Password. My voice is my password.</Say>
         </Record>`,
  "02": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/main-voice-input">
         <Say>Thank you . For My account press 1. To send money press 2. To Request for Money press 3. To Make Payment Press 4. For Loans and Savings Press 5. Press 0 To Speak to Customer Care</Say>
        </GetDigits>`,
  "1": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/myaccount-voice-input">
           <Say>For Mini-statement Press 1. To change language Press 2. To check Balance Press 3. To Change Pin Press 4.  To add Or Change Voice Password Press 5</Say>
         </GetDigits>`,
  "2": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/send-money/amount">
           <Say>To Send Money Enter the Phone Number of the Recipient</Say>
         </GetDigits>`,
   "2.1": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/send-money/confirm">
              <Say>To Amount you want to send</Say>
            </GetDigits>`,
   "2.2": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/send-money/success">
                 <Say>Your About to Send Kenya Shilling 3000 To 0726339983. To Confirm press 1 . To Decline Press 2 followed by Hash Sign)</Say>
               </GetDigits>`,
    "2.3": `<Say>Your Request Has been successfully been process. Thank you for Using pesaMe Finacial AI Voice Service.</Say>`,
  "3": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/validate-pin">
           <Say>Thank you . For My account press 1. To send money press 2. To Request for Money press 3. To Make Payment Press 4. For Loans and Savings Press 5. Press 0 To Speak to Customer Care</Say>
         </GetDigits>`,
  "4": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/validate-pin">
           <Say>Thank you . For My account press 1. To send money press 2. To Request for Money press 3. To Make Payment Press 4. For Loans and Savings Press 5. Press 0 To Speak to Customer Care</Say>
         </GetDigits>`,
  "5": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/validate-pin">
           <Say>Thank you . For My account press 1. To send money press 2. To Request for Money press 3. To Make Payment Press 4. For Loans and Savings Press 5. Press 0 To Speak to Customer Care</Say>
         </GetDigits>`,
  "0": `<Dial phoneNumbers="${customerCareNumber}"/>`
};

// Export the actions object
module.exports = actions;
