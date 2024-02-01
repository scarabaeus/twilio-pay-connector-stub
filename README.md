# twilio-pay-connector-stub

This is a POC stub for the Twilio Pay Connector. It is a simple web server that listens for incoming requests and responds with a JSON payload.

## Test Card

Card Number: `4111 1111 1111 1111`
Expiry Date: `12/25`
Billing Zip: `94105`
CVV: `333`

## Background

- Uses a Twilio-purchased [telephone number](https://console.twilio.com/us1/develop/phone-numbers/manage/incoming) to receive the call
- A [TwiML Bin](https://console.twilio.com/us1/develop/twiml-bins/twiml-bins) to handle the incoming call and forward the request to the connector
- The Twilio [Generic Pay Connector](https://console.twilio.com/us1/develop/add-ons/catalog) ([docs](https://www.twilio.com/docs/voice/twiml/pay/generic-pay-connector))
- This repo, as a stub for the payment gateway (accessed on my local via ngrok)
- A Twilio [serverless function](https://console.twilio.com/us1/develop/functions/services) to handle the response from the Generic Pay Connector
