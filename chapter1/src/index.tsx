import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { Othello } from './components/Othello';

ReactDOM.render(
  <React.StrictMode>
    <Othello />
  </React.StrictMode>,
  document.getElementById('root'),
);
