import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '@/pages/Login.vue';
import List from '@/pages/List.vue';
import Detail from '@/pages/Detail.vue';

Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/detail',
      component: Detail
    }
  ]
});

export default router;
