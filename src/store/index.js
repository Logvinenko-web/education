import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const url = 'http://127.0.0.1:3000'
export default new Vuex.Store({
  state: {
    categories: [],
    tasks: [],
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories
    },
    SET_TASKS: (state, tasks) => {
      state.tasks = tasks
    }
  },
  actions: {
   async GET_CATEGORIES({ commit }) {
      const response = await axios.get(url + "/categories")
         commit('SET_CATEGORIES', response.data);
    },
   async GET_TASKS({ commit }) {
     const response = await axios.get(url + "/tasks")       
      commit('SET_TASKS', response.data);
    },
    CREATE_TASKS({ commit }, task) {
      return axios
        .post(url + "/tasks", task)
        .then((response) => commit('SET_TASKS', response.data));
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
