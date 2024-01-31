// backend/server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const fuelDex = require('./fuelDex');

app.get('/', (req, res) => {
  res.send('Hello FuelLabs DApp!');
});

app.get('/balance/:address', (req, res) => {
  const address = req.params.address;
  // Fetch balance from FuelDex or other appropriate logic
  res.json({ balance: fuelDex.balances[address] || 0 });
});

app.post('/deposit', (req, res) => {
  const { token, amount, address } = req.body;
  // Implement deposit logic in FuelDex or other appropriate contract
  fuelDex.deposit(token, amount, address);
  res.json({ success: true });
});

app.post('/withdraw', (req, res) => {
  const { token, amount, address } = req.body;
  // Implement withdraw logic in FuelDex or other appropriate contract
  const success = fuelDex.withdraw(token, amount, address);
  res.json({ success });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
