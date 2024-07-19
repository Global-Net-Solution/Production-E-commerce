// store/index.js
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      SelectedOrdersTab: 2,
      filterBySubCategory: null,
      filterByColor: null,

    };
  },
  mutations: {
    setSelectedOrdersTab(state, value) {
      state.SelectedOrdersTab = value;
    },
    setfilterBySubCategory(state, value) {
      state.filterBySubCategory = value;
    },
    setfilterByColor(state, value) {
      state.filterByColor = value;
    },
  },
  actions: {
    setSelectedOrdersTab({ commit }, value) {
      commit("SelectedOrdersTab", value);
    },
    setfilterBySubCategory({ commit }, value) {
      commit("setfilterBySubCategory", value);
    },
    setfilterByColor({ commit }, value) {
      commit("setfilterByColor", value);
    },
  },
  getters: {
    getSelectedOrdersTab(state) {
      return state.SelectedOrdersTab;
    },
    getfilterBySubCategory(state) {
      return state.filterBySubCategory;
    },
    getfilterByColor(state) {
      return state.filterByColor;
    },
  },
});

export default store;
