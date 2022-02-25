
// const state = () => ({
//   logs: []
// });

const state = {
  logs: []
}

const getters = {

};

const mutations = {
  ADD_LOG(state, log) {
    state.logs = [...state.logs, log]
  }
};

const actions = {

};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
