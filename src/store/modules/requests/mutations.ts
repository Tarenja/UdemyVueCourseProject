import Request from '@/interfaces/Request';

export default {
  addRequest(state: any, payload: Request) {
    state.requests.push(payload);
  }
};
