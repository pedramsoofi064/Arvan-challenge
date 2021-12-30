<template>
  <div>
    <ValidationObserver ref="form">
      <form @submit.prevent="submit()">
        <slot />
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
  import { ValidationObserver } from 'vee-validate';
  export default {
    components: {
      ValidationObserver,
    },
    props: {
      autoValidation: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      async submit() {
        if (this.autoValidation) {
          const validate = await this.validate();
          if (!validate) return;
        }
        this.$emit('submit');
      },
      async validate() {
        return await this.$refs.form.validate();
      },
    },
  };
</script>

<style></style>
