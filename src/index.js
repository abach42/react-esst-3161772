import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App title="test" name="foobar" />
  </React.StrictMode>,
  document.getElementById('root')
);