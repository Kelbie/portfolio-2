// rome-ignore lint/importDefaultBasename
import React from 'react';
// rome-ignore lint/importDefaultBasename
import ReactDOM from 'react-dom';

import App from './App.jsx';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
);
