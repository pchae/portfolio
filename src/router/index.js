/* eslint-disable no-unused-vars */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta'
import Home from '../views/Home.vue';
import Info from '../views/Info.vue';

import Starz from '../views/Starz.vue';
import Pizza from '../views/Pizza.vue';
import Engage from '../views/Engage.vue';

Vue.use(VueRouter);
Vue.use(Meta);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: true,
      title: 'Phil Choi - Product Design',
      metaTags: [
        {
          name: 'description',
          content: 'About Phil Choi',
        },
        {
          property: 'og:description',
          content: 'About Phil Choi',
        },
      ],
    },
  },
  {
    path: '/info',
    name: 'info',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Info,
    meta: {
      auth: true,
      title: 'Phil Choi - Info',
      metaTags: [
        {
          name: 'description',
          content: 'Phil Choi Info',
        },
        {
          property: 'og:description',
          content: 'Phil Choi info page',
        },
      ],
    },
  },

  // Project: Starz Play
  {
    path: '/starz',
    name: 'starz',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Starz,
    meta: {
      auth: true,
      title: 'Phil Choi - Starz Play',
      metaTags: [
        {
          name: 'description',
          content: 'Phil Choi Starz Play case study',
        },
        {
          property: 'og:description',
          content: 'Phil Choi Starz Play case study',
        },
      ],
    },
  },
  // Project: Pizza Pizza
  {
    path: '/pizza',
    name: 'pizza',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Pizza,
    meta: {
      auth: true,
      title: 'Phil Choi - Pizza Pizza',
      metaTags: [
        {
          name: 'description',
          content: 'Phil Choi Pizza Pizza',
        },
        {
          property: 'og:description',
          content: 'Phil Choi Pizza Pizza',
        },
      ],
    },
  },
  // Project: Engage
  {
    path: '/engage',
    name: 'Engage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Engage,
    meta: {
      auth: true,
      title: 'Phil Choi - Engage',
      metaTags: [
        {
          name: 'description',
          content: 'Phil Choi Engage',
        },
        {
          property: 'og:description',
          content: 'Phil Choi Engage',
        },
      ],
    },
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 });
      }, 500);
    });
  },
});

export default router;