/* eslint-disable no-unused-vars */
import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue'),
  },
  // 404 page
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "notfound" */ '../views/notfound.vue'),
  },
  // About page
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/about.vue'),
  },
  // Project: Starz Play
  {
    path: '/starz',
    name: 'Starz',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "starz" */ '@/views/starz.vue'),
  },
  // Project: Pizza Pizza
  {
    path: '/pizza',
    name: 'Pizza',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pizza" */ '../views/pizza.vue'),
  },
  // Project: Engage
  {
    path: '/engage',
    name: 'Engage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "engage" */ '../views/engage.vue'),
  },
  // Project: PBS
  {
    path: '/pbs',
    name: 'Pbs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pbs" */ '../views/pbs.vue'),
  },
  // Project: RBC
  {
    path: '/fintech',
    name: 'Fintech',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "rbc" */ '../views/fintech.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ top: 0 });
      }, 500);
    });
  },
});

export default router;