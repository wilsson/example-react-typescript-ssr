import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { App } from './App'

ReactDOM.hydrate(
    <App />,
    document.getElementById('root')
);