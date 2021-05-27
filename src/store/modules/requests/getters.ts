export default {
  getRequests(state: any) {
    return state.requests;
  },
  hasRequests(state: any) {
    return state.requests && state.requests.length > 0;
  }
};
