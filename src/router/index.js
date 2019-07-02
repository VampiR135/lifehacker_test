import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',
      component: () => import('@/components/about/About.vue'),
      meta: {
        name: 'О компании'
      }
    },
    { path: '/404/',
      component: () => import('@/components/NotFound.vue'),
      hiddenMenu: true
    },

    { path: '*', redirect: '/404/', hiddenMenu: true }
  ],
});
