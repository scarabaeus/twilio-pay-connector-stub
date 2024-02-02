import express from 'express';
import { uuid } from 'uuidv4';
const app = express();

app.use(express.json());

const respond = (req, res) => {
  console.dir(
    `==================== Payment Info Received via ${
      req.method
    } at ${new Date().toLocaleString('en-US')} ====================`,
    { depth: null }
  );
  console.dir(req.body, { depth: null });

  const chargeResponse = {
    charge_id: 'ch_abcdef0123456789abcdef0123456789',
    parameters: {
      gateway_key_returned_1: 'steve',
      gateway_key_returned_2: 'gateway_value_returned_2',
      gateway_key_returned_3: 'gateway_value_returned_3',
      confirmation_number: uuid(),
    },
    error_code: null,
    error_message: null,
  };

  console.log(`==================== Response ====================`);
  console.dir(chargeResponse, { depth: null });

  res.setHeader('Content-Type', 'application/json');
  res.send(chargeResponse);
};

app.get('/', function (req, res) {
  respond(req, res);
});

app.post('/', function (req, res) {
  respond(req, res);
});

app.put('/', function (req, res) {
  respond(req, res);
});

app.patch('/', function (req, res) {
  respond(req, res);
});

app.listen(8888);
