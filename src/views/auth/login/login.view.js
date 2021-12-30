import formComponent from '@/common/components/form.component.vue';

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
};
