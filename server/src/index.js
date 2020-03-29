const express = require('express');
const app = express();
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;

app.use(express.static('public'));

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Document</title>
  </head>
  <body>
    <div id="root">${content}</div>
    <script src="bundle.js"></script>
  </body>
  </html>`;
  res.send(html);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
