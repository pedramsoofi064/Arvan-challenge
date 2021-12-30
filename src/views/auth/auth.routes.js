import authConstants from '@/constants/auth.constants';

const routes = [
  {
    path: '',
    redirect: authConstants.LOGIN_ROUTE_PATH,
  },
  {
    path: authConstants.LOGIN_ROUTE_PATH,
    name: authConstants.LOGIN_ROUTE_NAME,
    component: () => import('./login/login.view.vue'),
  },
  {
    path: authConstants.REGISTER_ROUTE_PATH,
    name: authConstants.REGISTER_ROUTE_NAME,
    component: () => import('./register/register.view.vue'),
  },
];

export default routes;
