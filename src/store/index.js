import Vue from 'vue';
import Vuex from 'vuex';
import aboutJson from '@/json/about.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    about: aboutJson,
  },

  getters: {
  },

  mutations: {
  },

  actions: {
  },

  modules: {
  },
});
