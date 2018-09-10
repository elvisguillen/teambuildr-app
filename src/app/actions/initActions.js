export function initAction() {
  return {
    type: 'INIT_LOAD',
    payload: {
      loggedIn: false,
      loading: false,
      token: null,
    }
  }
}