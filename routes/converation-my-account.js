// Define the actions object
const customerCareNumber = "+254701564702";
const actions = {
  "1": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="https://9dc0-41-80-112-84.eu.ngrok.io/myaccount-voice-input">
           <Say>For Mini-statement Press 1. To change language Press 2. To check Balance Press 3. To Change Pin Press 4.  To add Or Change Voice Password Press 5</Say>
         </GetDigits>`,
  "2": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="https://9dc0-41-80-112-84.eu.ngrok.io/validate-pin">
           <Say>Thank you . For My account press 1. To send money press 2. To Request for Money press 3. To Make Payment Press 4. For Loans and Savings Press 5. Press 0 To Speak to Customer Care</Say>
         </GetDigits>`,
  "3": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="https://9dc0-41-80-112-84.eu.ngrok.io/validate-pin">
           <Say>Thank you . For My account press 1. To send money press 2. To Request for Money press 3. To Make Payment Press 4. For Loans and Savings Press 5. Press 0 To Speak to Customer Care</Say>
         </GetDigits>`,
  "4": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="https://9dc0-41-80-112-84.eu.ngrok.io/validate-pin">
           <Say>Thank you . For My account press 1. To send money press 2. To Request for Money press 3. To Make Payment Press 4. For Loans and Savings Press 5. Press 0 To Speak to Customer Care</Say>
         </GetDigits>`,
  "5": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="https://9dc0-41-80-112-84.eu.ngrok.io/validate-pin">
           <Say>Thank you . For My account press 1. To send money press 2. To Request for Money press 3. To Make Payment Press 4. For Loans and Savings Press 5. Press 0 To Speak to Customer Care</Say>
         </GetDigits>`,
  "0": `<Dial phoneNumbers="${customerCareNumber}"/>`
};

// Export the actions object
module.exports = actions;
