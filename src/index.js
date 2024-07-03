import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App name="foobar" cool={<p>cool</p>}>
      <p>Lorem ipsum</p>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);