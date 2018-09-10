import {
  FETCH_USERS_START,
  FETCH_USERS_FULFILLED,
  FETCH_USERS_REJECTED,
  SET_VISIBILITY_FILTER,
} from '../actions/actionTypes';

const initialState = {
  users: [],
  userFilter: 'SHOW_ALL',
  loading: false,
  fetchedUsers: false,
}
export default function reducer(state=initialState, action) {
  switch(action.type) {
    case FETCH_USERS_START: {
      return {
        ...state,
        loading: true,
        fetchedUsers: false,
      }
    }
    case FETCH_USERS_FULFILLED: {
      return {
        ...state,
        users: [ ...action.payload ],
        fetchedUsers: true,
      }
    }
    case FETCH_USERS_REJECTED: {
      return {
        ...state,
        ...err,
        loading: false,
        fetchedUsers: false,
      }
    }
    case SET_VISIBILITY_FILTER: {
      return {
        ...state,
        userFilter: action.payload
      }
    }
  }
  return state;
}