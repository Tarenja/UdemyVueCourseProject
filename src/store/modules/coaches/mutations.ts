import Coach from '@/interfaces/Coach';

export default {
  registerCoach(state: any, payload: Coach) {
    state.coaches.push(payload);
  }
};
