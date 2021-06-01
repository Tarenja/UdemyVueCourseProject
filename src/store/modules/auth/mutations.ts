export default {
  setUser(state: any, payload: any) {
    state.token = payload.token;
    state.userId = payload.userId;
  },
  setAutoLogout(state: any) {
    state.didAutoLogout = true;
  }
};
