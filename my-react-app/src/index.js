import React from 'react';
import ReactDOM from 'react-dom';
import './Navigation.css';
import './index.css';
import Navigation from './Navigation';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Navigation logoTitle ="React Portfolio"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
