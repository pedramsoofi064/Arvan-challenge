import Vue from 'vue';
import VueRouter from 'vue-router';
import authMiddleware from '@/middlewares/auth.middleware';

import authConstants from '@/constants/auth.constants';
import authChildren from '@/views/auth/auth.routes';

import articlesCostatnts from '@/constants/article.constants';
import articlesChildren from '@/views/articles/article.routes.js';
Vue.use(VueRouter);

const routes = [
  {
    path: authConstants.AUTH_ROUTE_PATH,
    name: authConstants.AUTH_ROUTE_NAME,
    component: () => import('@/views/auth/auth.view.vue'),
    children: authChildren,
  },
  {
    path: articlesCostatnts.ARTICLES_ROUTE_PATH,
    name: articlesCostatnts.ARTICLES_ROUTE_NAME,
    component: () => import('@/views/articles/articles.view.vue'),
    children: articlesChildren,
    meta: {
      layout: articlesCostatnts.LAYOUT,
      isAuthRequired: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// TO FIX : authenticate middle and add authorize middleware
router.beforeEach(authMiddleware);

export default router;
