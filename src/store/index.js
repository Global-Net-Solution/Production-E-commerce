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
      localStorage.setItem('SelectedOrdersTab', value);
    },
    setfilterBySubCategory(state, value) {
      state.filterBySubCategory = value;
      
      localStorage.setItem('filterBySubCategory',JSON.stringify(value) );
      //console.log('getFilterBySubCategory', localStorage.getItem('filterBySubCategory'));
    },
    setfilterByColor(state, value) {
      state.filterByColor = value;
      localStorage.setItem('filterByColor', value);
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
