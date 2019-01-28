import React from 'react';
import ReactDOM from 'react-dom';
import styles from './scss/styles.scss';

import { applyMiddleware , createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import logger from 'redux-logger';

import App from './containers/App/index';
import redusers from './reducers';
import Api from './api/api';

const store = createStore(redusers , applyMiddleware(logger));
const content = document.getElementById('app');

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
) , content);