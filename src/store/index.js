import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const url = 'https://fastapi-support.herokuapp.com'
// const url = ' http://127.0.0.1:3000'



export default new Vuex.Store({
  state: {
    categories: [],
    tasks: [],
    days: [],
    education_tasks: [],
    tabs:[],
    explanation:[],
    instructions:[],
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories
    },
    SET_TASKS: (state, tasks) => {
      state.tasks = tasks

    },
    SET_TASKS_CREATE: (state, tasks) => {
      state.tasks.push(tasks)
    },
    SET_TASKS_DELETE: (state, id) => {
      state.tasks.forEach((item, index) => {
              if (item.id == id) {
                state.tasks.splice(index, 1);
              }
            });
    },
    SET_DAYS: (state, days) => {
      state.days = days
    },
    SET_EDUCATION_TASKS: (state,  education_tasks) => {
      state.education_tasks =  education_tasks
    },
    SET_TABS: (state,  tabs) => {
      state.tabs =  tabs
    },
    SET_EXPLANATION: (state,  explanation) => {
      state.explanation =  explanation
    },
    SET_INSTRUCTIONS: (state,  instructions) => {
      state.instructions =  instructions
    },
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
    async CREATE_TASKS({ commit }, task) {
      const response = await axios.post(url + "/tasks", task)
        commit('SET_TASKS_CREATE', response.data);
    },
    async DELETE_TASKS({ commit }, id) {
      await axios.delete(url + "/tasks/" + id)
      commit('SET_TASKS_DELETE', id)
    },
    async GET_DAYS({ commit }) {
      const response = await axios.get(url +"/categories/education/get")       
       commit('SET_DAYS', response.data);
     },
     async GET_EDUCATION_TASKS({ commit }) {
      const response = await axios.get(url + "/categories/education/education_tasks")       
       commit('SET_EDUCATION_TASKS', response.data);
     },
    
     async GET_TABS({ commit }) {
      const response = await axios.get(url + "/categories/tabs/")       
       commit('SET_TABS', response.data);
     },
  
     async GET_EXPLANATION({ commit }) {
      const response = await axios.get(url + "/categories/tabs/explanation")       
       commit('SET_EXPLANATION', response.data);
       
     },
     async GET_INSTRUCTIONS({ commit }) {
      const response = await axios.get(url + "/categories/tabs/instructions")       
       commit('SET_INSTRUCTIONS', response.data);
       
     },
  },
  getters: {
    CATEGORIES(state) {
      return state.categories
    },
    TASKS(state) {
      console.log(state)
      return state.tasks
    }
  },
  modules: {

  }
})
