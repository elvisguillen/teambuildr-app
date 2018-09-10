import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppRoutes from './routes';
import store from './data/store';
import setAuthToken from './utils/setAuthToken';
import { loginAuthorized, setCurrentUser } from './actions/authActions';

const app = document.getElementById('app');

if (localStorage.TOKEN) {
  setAuthToken(localStorage.TOKEN);
  store.dispatch(loginAuthorized())
  store.dispatch(setCurrentUser())
}

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
, app);