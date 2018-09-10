import axios from 'axios';

import { 
  FETCH_USERS_START,
  FETCH_USERS_FULFILLED,
  FETCH_USERS_REJECTED,
  SET_VISIBILITY_FILTER
} from './actionTypes';

export function fetchUser() {
  return dispatch => {
    dispatch({type: FETCH_USERS_START})
    axios.get('/users')
      .then((response) => {
        dispatch({type: FETCH_USERS_FULFILLED, payload: response.data.result})
      })
      .catch((err) => {
        dispatch({type: FETCH_USERS_REJECTED, payload: err})
      })
  }
};

export function setFilter(filter) {
  return dispatch => {
    dispatch({type: SET_VISIBILITY_FILTER, payload: filter})
  }
}