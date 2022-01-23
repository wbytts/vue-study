import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/views-list.vue')
  },
]

export const createRouter = () => {
  const router = new VueRouter({
    routes
  });

  router.beforeEach((to, from, next) => {
    console.log('to', to);
    console.log('from', from);
    next();
  });

  router.afterEach(() => {

  });

  return router;
}
