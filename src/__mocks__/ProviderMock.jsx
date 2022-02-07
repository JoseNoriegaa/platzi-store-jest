import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import initialState from '../initialState';
import reducer from '../reducers';

const store = createStore(reducer, initialState);
const history = createBrowserHistory();

const ProviderMock = ({ children }) => (
  <Provider store={store}>
    <Router history={history}>
      { children }
    </Router>
  </Provider>
);

export default ProviderMock;
