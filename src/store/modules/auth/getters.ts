export default {
  getUserId(state: any) {
    return state.userId;
  },
  getToken(state: any) {
    return state.token;
  },
  isAuthenticated(state: any) {
    return !!state.token;
  }
};
