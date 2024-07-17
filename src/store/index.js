// store/index.js
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      SelectedOrdersTab: 2,
    };
  },
  mutations: {
    setSelectedOrdersTab(state, value) {
      state.SelectedOrdersTab = value;
    },
  },
  actions: {
    setSelectedOrdersTab({ commit }, value) {
      commit("setSelectedOrdersTab", value);
    },
  },
  getters: {
    getSelectedOrdersTab(state) {
      return state.SelectedOrdersTab;
    },
  },
});

export default store;
