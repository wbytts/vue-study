import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/admin',
    component: () => import('@/pages/admin/index.vue'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
