export default {
  namespaced: true,
  state: {
    content: '',
    type: '',
  },
  mutations: {
    showMessage(state, payload) {
      state.content = payload.content;
      state.type = payload.type;
    },
  },
};
