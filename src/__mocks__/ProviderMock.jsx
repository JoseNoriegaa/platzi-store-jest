import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import initialState from '../initialState';
import reducer from '../reducers';

const ProviderMock = ({
  children,
  state = initialState,
  history = createBrowserHistory(),
}) => {
  const store = createStore(reducer, state);

  return (
    <Provider store={store}>
      <Router history={history}>
        { children }
      </Router>
    </Provider>
  );
};

export default ProviderMock;
