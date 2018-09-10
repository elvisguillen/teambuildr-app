import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { createLogger }  from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import history from '../history';

import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';
import { persistToken } from './middleware';

const middleware = composeWithDevTools(
  applyMiddleware(
    routerMiddleware(history), 
    thunk, createLogger(), 
    persistToken
  )
);

const store = createStore(connectRouter(history)(reducer), middleware);

export default store;
