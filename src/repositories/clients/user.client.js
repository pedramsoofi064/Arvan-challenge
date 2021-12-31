import { create as createClient } from 'axios';
import GeneralConstant from '@/constants/general.constants';
import cookie from '@/plugins/jsCookie.plugin';
import toast from '@/plugins/toast.plugin';
import router from '@/router/index';

const axiosInstance = createClient({
  baseURL: GeneralConstant.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: `Token ${cookie.get('token')}`,
  },
});

function makeException(client, config) {
  this.client = client;
  this.config = config;
}

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { errors } = error.response.data;
      Object.keys(errors).forEach((item) => {
        toast.showMessage({
          content: `${item} ${errors[item][0]}`,
          type: 'error',
        });
      });
      if (error.response.status == 401) {
        cookie.remove('token');
        cookie.remove('username');
        router.push('/login');
      }
    }
    throw new makeException(axiosInstance, error.config);
  },
);

export default axiosInstance;
