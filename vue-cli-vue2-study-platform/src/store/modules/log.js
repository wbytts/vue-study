// const state = () => ({
//   logs: [],
//   lastLog: {},
// });

const state = {
  logs: [],
  lastLog: {},
};

const getters = {};

const mutations = {
  ADD_LOG(state, log) {
    state.logs = [...state.logs, log];
    state.lastLog = log;
    while (state.logs.length > 100) {
      state.logs.splice(0, 1);
    }
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
