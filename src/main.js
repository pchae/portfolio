import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueLazyload from 'vue-lazyload'

import '@/assets/css/layout.css';

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  preload: 1.3,
  attempt: 1
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');