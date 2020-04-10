import React from 'react';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
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

  // window.INITIAL_STATE = ${serialize(store.getState())}

  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Document</title>
  </head>
  <body>
    <div id="root">${content}</div>
    <script type="text/javascript">
      window.INITIAL_STATE = ${JSON.stringify(store.getState())}
    </script>
    <script src="bundle.js"></script>
  </body>
  </html>`;
  return html;
};
