export default {
  contactCoach(context: any, payload: any) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      userMessage: payload.message
    };
    context.commit('addRequest', newRequest);
  }
};
