// rome-ignore lint/importDefaultBasename
import React from 'react';
// rome-ignore lint/importDefaultBasename
import ReactDOM from 'react-dom';

import App from './App.jsx';

var a = 'a';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
);
