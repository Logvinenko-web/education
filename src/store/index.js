import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories
    }
  },
  actions: {
    GET_CATEGORIES({ commit }) {
      return axios
        .get("http://127.0.0.1:3000/categories")
        .then((response) => commit('SET_CATEGORIES', response.data));
    }
  },
  getters: {
    CATEGORIES(state) {
      return state.categories
    }
  },
  modules: {

  }
})
