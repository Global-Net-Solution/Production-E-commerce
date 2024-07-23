// store/index.js
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      SelectedOrdersTab: 2,
      filterBySubCategory:  null,
      filterByColor: null,
      pageSize: 5,
      skipPage: 0,
      totalCount: 0,
    };
  },
  mutations: {
    setSelectedOrdersTab(state, value) {
      state.SelectedOrdersTab = value;
      localStorage.setItem("SelectedOrdersTab", value);
    },
    setfilterBySubCategory(state, value) {
      state.filterBySubCategory = value;
      localStorage.setItem("filterBySubCategory", JSON.stringify(value));
    },
    setfilterByColor(state, value) {
      state.filterByColor = value;
      localStorage.setItem("filterByColor", JSON.stringify(value));
    },
    SET_PAGE_SIZE: (state, pageSize) => (state.pageSize = pageSize),
    SET_SKIP_PAGE: (state, skipPage) => (state.skipPage = skipPage),
    SET_TOTAL_COUNT: (state, totalCount) => (state.totalCount = totalCount),
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
    setPageSize: ({ commit }, pageSize) => commit("SET_PAGE_SIZE", pageSize),
    setSkipPage: ({ commit }, skipPage) => commit("SET_SKIP_PAGE", skipPage),
    setTotalCount: ({ commit }, totalCount) =>
      commit("SET_TOTAL_COUNT", totalCount),
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
    getPageSize: (state) => state.pageSize,
    getSkipPage: (state) => state.skipPage,
    getTotalCount: (state) => state.totalCount,
  },
});

export default store;
