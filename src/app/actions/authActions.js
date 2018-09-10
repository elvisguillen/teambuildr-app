import axios from 'axios';
import history from '../history';
import { push } from 'connected-react-router';

import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  LOGIN_START,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  LOGIN_AUTHORIZED,
  LOGOUT,
  SET_CURRENT_USER_START,
  SET_CURRENT_USER_FULFILLED,
  SET_CURRENT_USER_REJECTED,
} from './actionTypes';

import '../utils/setCommonHeaders';
import setAuthToken from '../utils/setAuthToken';

export function updateEmail(user) {
  return {
    type: UPDATE_EMAIL,
    payload: user
  }
}

export function updatePassword(pass) {
  return {
    type: UPDATE_PASSWORD,
    payload: pass
  }
}

export function login(email, password) {
  return dispatch => {
    dispatch({type: LOGIN_START})
    axios.post('/login', { email, password })
      .then((response) => {
        console.log(response.data);
        dispatch({type: LOGIN_FULFILLED, payload: response.data.result});
      })
      .catch((err) => {
        dispatch({type: LOGIN_REJECTED, payload: err});
      })
  }
}

export function loginAuthorized() {
  return dispatch => {
    dispatch({type: LOGIN_AUTHORIZED})
  }
}

export function startReload() {
  return dispatch => {
    dispatch({type: LOGIN_AUTHORIZED})
    setCurrentUser();
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('TOKEN');
    setAuthToken(false);
    dispatch({type: LOGOUT});
  }
}

export function setCurrentUser() {
  return dispatch => {
    dispatch({type: SET_CURRENT_USER_START});
    axios.get('/users/me')
      .then((response) => {
        dispatch({type: SET_CURRENT_USER_FULFILLED, payload: response.data.result});
        dispatch(push('/dashboard'))
        localStorage.setItem('CURRENT_USER', response.data.result)
      })
      .catch((err) => {
        dispatch({type: SET_CURRENT_USER_REJECTED, payload: err});
      })
  }
}