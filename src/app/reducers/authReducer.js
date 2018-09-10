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
} from '../actions/actionTypes';

import setAuthToken from '../utils/setAuthToken';

const initialState = {
    email: '',
    password: '',
    isAuthenticated: false,
    loading: false,
    currentUser: false,
    user: {}
}

export default function reducer(state=initialState, action) {
    
  switch(action.type) {
    case UPDATE_EMAIL: {
      return {
        ...state,
        email: action.payload
      };
    }
    case UPDATE_PASSWORD: {
      return {
        ...state, 
        password: action.payload
      };
    }
    case LOGIN_START: {
      return {
        ...state, 
        loading: true,
        loggedIn: false,
      };
    }
    case LOGIN_FULFILLED: {
      return {
        ...state, 
        loading: false,
        isAuthenticated: true,
        token: action.payload.token,
        password: '',
      };
    }
    case LOGIN_REJECTED: {
      return {
        ...state, 
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };
    }
    case LOGIN_AUTHORIZED: {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        password: ''
      }
    }
    case LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        token: null,
      }
    }
    case SET_CURRENT_USER_START: {
      return {
        ...state,
        loading: true,
      }
    }
    case SET_CURRENT_USER_FULFILLED: {
      return {
        ...state,
        isAuthenticated: true,
        currentUser: true,
        user: action.payload.user_info,
        skin: action.payload.skin,
        settings: action.payload.settings,
      }
    }
    case SET_CURRENT_USER_REJECTED: {
      return {
        ...state,
        currentUser: false,
        isAuthenticated: false,
        error: action.payload
      }
    }
  }
  return state;
}