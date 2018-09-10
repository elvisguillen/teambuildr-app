export default function(state, action) {
  switch(action.type) {
    case 'INIT_LOAD': {
      return {
        ...state,
        auth: {
          ...state.auth,
          loggedIn: false,
        }
      }
    }
  }
}