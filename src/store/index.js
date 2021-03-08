import Vue from 'vue';
import Vuex from 'vuex';
import servicelist from '@/json/services.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    services: servicelist,
  },

  getters: {
    getServices (state) {
      return state.services
    }
  },
  mutations: {
  },

  actions: {
  },

  modules: {
  },
});
