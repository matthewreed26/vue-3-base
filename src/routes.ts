import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HelloWorld from './inputs/components/HelloWorld.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    props: () => ({
      msg: 'Welcome to Your Vue.js + TypeScript App',
    }),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
