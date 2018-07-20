const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  return res.redirect('/')
});

app.listen(PORT, () => {
  console.log('app is serving files at port ', PORT);
});
