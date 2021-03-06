import articlesCostatnts from '@/constants/article.constants';

const routes = [
  {
    path: articlesCostatnts.PAGE1_ROUTE_PATH,
    name: articlesCostatnts.PAGE_ROUTE_NAME,
    component: () => import('./page/page.view.vue'),
    meta: {
      layout: articlesCostatnts.LAYOUT,
      isAuthRequired: true,
    },
  },
  {
    path: articlesCostatnts.PAGE_ROUTE_PATH,
    name: articlesCostatnts.PAGE_ROUTE_NAME,
    component: () => import('./page/page.view.vue'),
    meta: {
      layout: articlesCostatnts.LAYOUT,
      isAuthRequired: true,
    },
  },
  {
    path: articlesCostatnts.CREATE_ROUTE_PATH,
    name: articlesCostatnts.CREATE_ROUTE_NAME,
    component: () => import('./modify/modify.view.vue'),
    meta: {
      layout: articlesCostatnts.LAYOUT,
      isAuthRequired: true,
    },
  },
  {
    path: articlesCostatnts.EDIT_ROUTE_PATH,
    name: articlesCostatnts.EDIT_ROUTE_NAME,
    component: () => import('./modify/modify.view.vue'),
    meta: {
      layout: articlesCostatnts.LAYOUT,
      isAuthRequired: true,
    },
  },
];

export default routes;
