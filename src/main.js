import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import { createHead } from '@vueuse/head'
import VueLazyLoad from 'vue3-lazyload';
import '@/assets/css/layout.css';

const head = createHead()

createApp(App)
  .use(router)
  .use(store)
  .use(head)
  .use(VueLazyLoad, {
    // options...
  })
  .mount('#app');