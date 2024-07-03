import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

const nameObj = {
  prename: 'foo',
  lastname: 'bar'
}

ReactDOM.render(
  <React.StrictMode>
    <App title="test" name="foobar" nameObj={nameObj} />
  </React.StrictMode>,
  document.getElementById('root')
);