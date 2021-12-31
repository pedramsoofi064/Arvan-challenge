import formComponent from '@/common/components/form.component.vue';

import RepositoryFactory from '@/repositories/RepositoryFactory';
const authRepository = RepositoryFactory.get('auth');

export default {
  name: 'Login',
  components: {
    formComponent,
  },
  data() {
    return {
      loading: false,
      model: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      this.loading = true;
      try {
        const { data } = await authRepository.login({
          user: this.model,
        });
        this.loading = false;
        this.$cookie.set('token', data?.user?.token);
        this.$cookie.set('username', data?.user?.username);
        this.$toast.showMessage({
          content: '<b>Well done!</b> user logged in successfuly',
          type: 'success',
        });
        this.$router.push('/articles/page');
      } catch {
        this.loading = false;
      }
    },
  },
};
