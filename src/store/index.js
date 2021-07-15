import { createStore } from 'vuex';
import aboutJson from '@/json/about.json';
import clientJson from '@/json/clients.json';
import projectJson from '@/json/projects.json';

export default createStore({
  state: {
    about: aboutJson,
    clients: clientJson,
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
