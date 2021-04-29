import Vue from 'vue';
import Vuex from 'vuex';
import { data } from '@/json/services.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    services: data,
  },
  mutations: {
  },

  actions: {
  },

  modules: {
  },
});
