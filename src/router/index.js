/* eslint-disable no-unused-vars */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';


Vue.use(VueRouter);
Vue.use(Meta);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue'),
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
  // 404 page
  {
    path: '*',
    name: 'NotFound',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "notfound" */ '../views/notfound.vue'),
    meta: {
      auth: true,
      title: '404 Page not found - Phil Choi',
      metaTags: [
        {
          name: 'description',
          content: '404 Page not found',
        },
        {
          property: 'og:description',
          content: '404 Page not found',
        },
      ],
    },
  },
  // About page
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue'),
    meta: {
      auth: true,
      title: 'About - Phil Choi',
      metaTags: [
        {
          name: 'description',
          content: 'About Phil Choi',
        },
        {
          property: 'og:description',
          content: 'Phil Choi about page',
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
    component: () => import(/* webpackChunkName: "starz" */ '../views/starz.vue'),
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
    component: () => import(/* webpackChunkName: "pizza" */ '../views/pizza.vue'),
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
    name: 'engage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "engage" */ '../views/engage.vue'),
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
  // Project: PBS
  {
    path: '/pbs',
    name: 'pbs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pbs" */ '../views/pbs.vue'),
    meta: {
      auth: true,
      title: 'Phil Choi - Public Broadcasting Service',
      metaTags: [
        {
          name: 'description',
          content: 'Phil Choi PBS',
        },
        {
          property: 'og:description',
          content: 'Phil Choi PBS',
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