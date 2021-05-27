import Request from '@/interfaces/Request';

export default {
  getRequests(state: any, _: any, _2: any, rootGetters: any) {
    const coachId = rootGetters.getUserId;
    return state.requests.filter((req: Request) => req.coachId === coachId);
  },
  hasRequests(_: any, getters: any) {
    return getters.getRequests && getters.getRequests.length > 0;
  }
};
