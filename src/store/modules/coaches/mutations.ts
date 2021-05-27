import Coach from '@/interfaces/Coach';

export default {
  registerCoach(state: any, payload: Coach) {
    state.coaches.push(payload);
  },
  setCoaches(state: any, payload: Coach[]) {
    state.coaches = payload;
  },
  setFetchTimestamp(state: any) {
    state.lastFetch = new Date().getTime();
  }
};
