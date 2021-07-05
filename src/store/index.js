import { createStore } from 'vuex';
import aboutJson from '@/json/about.json';
import projectJson from '@/json/projects.json';

export default createStore({
  state: {
    about: aboutJson,
    project: projectJson,
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
