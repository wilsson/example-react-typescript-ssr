import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'
import { App } from '../client/App';
import { html } from './template';

const port = 8080;
const server = express();

server.use(express.static('dist'));

server.get('*', (req, res) => {
    console.log('req', req.url);
    const sheet = new ServerStyleSheet();

    //const body = renderToString(<App />);
    try {
        App.fetchUsers()
            .then((data) => {
                console.log('data>', data);
                let initialData = [];
                if(req.url === '/1') {
                    initialData.push(data[0]);
                } else {
                    initialData.push(data[1]);
                }
                const body = renderToString(sheet.collectStyles(<App data={initialData} />))
                const styles = sheet.getStyleTags() // or sheet.getStyleElement()
                const title = 'Server side Rendering with Styled Components';
                res.send(
                    html({
                        body,
                        styles,
                        title,
                        initialData
                    })
                );
            })
    }catch(err) {
        console.log('err', err);
    }
});

server.listen(port, () => {
    console.log(`Serving at http://localhost:${port}`);
});
