import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'
import { App } from '../client/App';
import { html } from '../client/Html';

const port = 3000;
const server = express();

server.use(express.static('dist'));

server.get('/', (req, res) => {
  const sheet = new ServerStyleSheet();

  //const body = renderToString(<App />);
  const body = renderToString(sheet.collectStyles(<App />))
  const styles = sheet.getStyleTags() // or sheet.getStyleElement()

  const title = 'Server side Rendering with Styled Components';

  res.send(
    html({
      body,
      styles,
      title
    })
  );
});

server.listen(port, () => {
  console.log('mode', process.env.NODE_ENV);
  console.log(`Serving at http://localhost:${port}`);
});
