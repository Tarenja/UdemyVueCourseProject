import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state() {
    return {
      requests: []
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters
};
