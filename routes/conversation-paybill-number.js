// Define the actions object
//require('dotenv').config();
const customerCareNumber = "+254701564702";
const base_url = process.env.BASE_URL;
const actions = {
    
        //Paybill Number
        "3": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/paybill-number/paybill-account">
                        <Say>Enter Paybill number</Say>
                        </GetDigits>
                <Say>We did not get your account number. Good bye</Say>`,
        "3.1": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/paybill-number/paybill-amount">
                <Say>Enter Account</Say>
                </GetDigits>
                <Say>We did not get your account number. Good bye</Say>`,

        "3.1.1": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/paybill-number/paybill-confirm">
                <Say>Enter Amount to pay</Say>
                </GetDigits>
                <Say>We did not get your account number. Good bye</Say>`,

        "3.1.1.1": `<GetDigits timeout="300" finishOnKey="#" callbackUrl="${base_url}/pesame/paybill-number/success">
                <Say>You are about to pay Ksh. 100 to Faith Enterprises. Press 1 to confirm. Press 2 to decline.</Say>
                </GetDigits>
                <Say>We did not get your account number. Good bye</Say>`,
        "3.2": `<Say>Your Request Has been successfully been processed. Thank you for Using pesaMe Finacial AI Voice Service.</Say>`,
        "0": `<Dial phoneNumbers="${customerCareNumber}"/>`
};
// Export the actions object
module.exports = actions;


