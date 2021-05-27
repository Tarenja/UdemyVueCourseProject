export default {
  registerCoach(context: any, payload: any) {
    const coachData = {
      id: context.rootGetters.getUserId,
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas
    };
    context.commit('registerCoach', coachData);
  }
};
