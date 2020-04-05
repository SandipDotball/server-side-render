const express = require('express');
const app = express();
const renderer = require('./helpers/renderer').default;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(renderer());
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
