import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/Routes';
import { Provider } from 'react-redux';

const context = {};

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.path}>
        {/*<Routes />*/}
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
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
  return html;
};
