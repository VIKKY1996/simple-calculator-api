const express = require('express');
const app = express();

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const result = Number(a) + Number(b);
  res.json({ result });
});

app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  const result = Number(a) - Number(b);
  res.json({ result });
});

if (require.main === module) {
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
}

module.exports = app;
