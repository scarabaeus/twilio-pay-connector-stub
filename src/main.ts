import express from 'express';
const app = express();

app.get('/', function (req, res) {
  res.send('twilio-pay-connector-stub');
});

app.listen(8888);
