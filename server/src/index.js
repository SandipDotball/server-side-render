import 'babel-polyfill';
const express = require('express');
const app = express();
const renderer = require('./helpers/renderer').default;
import { matchRoutes } from 'react-router-config';
import { store } from '../src/client/store/store';
import Routes from './client/Routes';
import { createStore } from 'redux';

app.use(express.static('public'));

app.get('*', (req, res) => {
  // const newStore = createStore();
  // Load data from the store
  const promiss = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  // ALL DATA COMING FROM SERVER WITH HTML CODE
  Promise.all(promiss).then(() => {
    res.send(renderer(req, store));
  });

  // DATA COMING FROM SERVER BUT LATTER
  // res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
