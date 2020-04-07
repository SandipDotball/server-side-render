import 'babel-polyfill';
const express = require('express');
const app = express();
const renderer = require('./helpers/renderer').default;

import { store } from '../src/client/store/store';

app.use(express.static('public'));

app.get('*', (req, res) => {
  // Load data from the store
  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
