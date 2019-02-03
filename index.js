const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/.well-known/acme-challenge/uAhwRFcnsvrouEtz2Hk-B2okfoDouLTuvMGdFACips0', (req, res) => {
  res.send('uAhwRFcnsvrouEtz2Hk-B2okfoDouLTuvMGdFACips0.abFappabZBLHRcl142HvwvSybhF8-eU54sFcf1gSrlg');
});

app.get('*', (req, res) => {
  return res.redirect('/')
});

app.listen(PORT, () => {
  console.log('app is serving files at port ', PORT);
});
