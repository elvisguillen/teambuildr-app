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

const middleware = composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk, createLogger(), persistToken));

const store = createStore(connectRouter(history)(reducer), middleware);

export default store;

// store.subscribe(() => {

//   localStorage.setItem('TOKEN', store.getState().auth);
// });

// store.subscribe(() => {
//   console.log('Store Changed', store.getState());
// })

// store.dispatch({
//   type: 'FETCH_USERS',
//   payload: axios.get('https://jsonplaceholder.typicode.com/users');
// })

// store.dispatch((dispatch) => {
//   dispatch({type: 'FETCH_USERS_START'})
//   axios.get("http://rest.learncode.academy/api/wstern/users")
//     .then((response) => {
//       dispatch({type: 'RECEIVE_USERS', payload: response.data})
//     })
//     .then((err) => {
//       dispatch({type: 'FETCH_USERS_ERROR', payload: err})
//     }) 
// })
