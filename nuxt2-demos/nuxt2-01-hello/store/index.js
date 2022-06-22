export const state = () => ({
  username: '游客'
});

export const mutations = {
  setName(state, name) {
    state.username = name
  },
};
