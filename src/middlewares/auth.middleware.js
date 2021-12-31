import cookie from '@/plugins/jsCookie.plugin';

// TO FIX: Auth guard is not complete
const auth = (to, from, next) => {
  const token = cookie.get('token');

  if (!token && to.meta.isAuthRequired) {
    next('/login');
  } else if (token && !to.meta.isAuthRequired) {
    next('/articles/page');
  } else next();
};

export default auth;
