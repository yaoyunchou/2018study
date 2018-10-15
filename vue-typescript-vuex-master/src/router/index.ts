import Vue from 'vue';
import Router from 'vue-router';
import login from '@/views/login.vue';
import chatroom from '@/views/chatroom.vue';
import publish from '@/views/publish.vue';
import detail from '@/views/detail.vue';
import register from '@/views/register.vue';
import reset from '@/views/reset.vue';
import test from '@/views/test.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: chatroom
    },
    {
      path: '/publish',
      name: 'publish',
      component: publish
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/reset',
      name: 'reset',
      component: reset
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
