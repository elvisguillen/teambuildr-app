import { LOGIN_FULFILLED } from "../actions/actionTypes";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, loginAuthorized } from '../actions/authActions';

export const persistToken = store => next => action => {
  switch (action.type) {
    case LOGIN_FULFILLED:
      const token = action.payload.token; 
      localStorage.setItem('TOKEN', token);
      setAuthToken(token);
      store.dispatch(loginAuthorized());
      store.dispatch(setCurrentUser());
      break;
    // case ON_STARTUP:
    //   break;
  }
  next(action);
}

