// Define the actions object
const customerCareNumber = "+254701564702";
const base_url = "https://792a-197-232-59-37.ngrok-free.app";
const actions = {
  "1": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/main-voice-input">
           <Say>For Mini-statement Press 1. To change language Press 2. To check Balance Press 3. To Change Pin Press 4.  To add Or Change Voice Password Press 5</Say>
         </GetDigits>`,
  "2": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/main-voice-input">
         <Say>For Mini-statement Press 1. To change language Press 2. To check Balance Press 3. To Change Pin Press 4.  To add Or Change Voice Password Press 5</Say>
       </GetDigits>`,
  "3": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/main-voice-input">
       <Say>For Mini-statement Press 1. To change language Press 2. To check Balance Press 3. To Change Pin Press 4.  To add Or Change Voice Password Press 5</Say>
     </GetDigits>`,
  "4": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/main-voice-input">
         <Say>For Mini-statement Press 1. To change language Press 2. To check Balance Press 3. To Change Pin Press 4.  To add Or Change Voice Password Press 5</Say>
       </GetDigits>`,
  "5": `<GetDigits finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true" callbackUrl="${base_url}/pesame/main-voice-input">
       <Say>For Mini-statement Press 1. To change language Press 2. To check Balance Press 3. To Change Pin Press 4.  To add Or Change Voice Password Press 5</Say>
     </GetDigits>`,


  "0": `<Dial phoneNumbers="${customerCareNumber}"/>`
};

// Export the actions object
module.exports = actions;
