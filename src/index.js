import React from 'react';
import ReactDOM from 'react-dom';
import Dime from './dime';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Respo from './Responsive';

ReactDOM.render(
  <React.StrictMode>
    <Dime />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
