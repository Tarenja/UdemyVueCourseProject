import Coach from '@/interfaces/Coach';

export default {
  getCoaches(state: any) {
    return state.coaches;
  },
  hasCoaches(state: any) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_: any, getters: any, _2: any, rootGetters: any) {
    const coaches = getters.getCoaches;
    const userId = rootGetters.getUserId;
    return coaches.some((coach: Coach) => coach.id === userId);
  },
  shouldUpdate(state: any) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  }
};
