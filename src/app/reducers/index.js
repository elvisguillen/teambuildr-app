import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form'

import auth from './authReducer';
import usersList from './usersReducer';

export default combineReducers({
  auth,
  usersList,
  // form: formReducer
})