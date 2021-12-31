import formComponent from '@/common/components/form.component.vue';


import RepositoryFactory from "@/repositories/RepositoryFactory";
const authRepository = RepositoryFactory.get("auth");

export default {
  name: 'Register',
  components: {
    formComponent,

  },
  data() {
    return {
      loading: false,
      model: {
        email: '',
        password: '',
        username: '',
      },
    };
  },
  methods: {
    async register() {
      this.loading = true;

      try {
        const {
          data
        } = await authRepository.register({
          user: this.model
        })
        this.loading = false;
        this.$cookie.set('token', data?.user?.token)
        this.$cookie.set('username', data?.user?.username)
        this.$router.push('/articles/page');
        this.$toast.showMessage({
          content: '<b>Well done!</b> user registred successfuly',
          type: 'success'
        })
      } catch {
        this.loading = false;

      }
    }
  }
};