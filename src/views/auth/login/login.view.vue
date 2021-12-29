<template>
  <section class="auth_section login">
    <h1 class="auth__title text-center">LOGIN</h1>
    <form-component auto-validation>
      <input-component
        v-model="model.email"
        rules="required|email"
        class="form__input"
        label="Email"
      />
      <input-component
        v-model="model.password"
        rules="required"
        type="password"
        class="form__input"
        label="Password"
      />
      <button-component :loading="loading" class="btn-primary  w-100" @click="loading = true">
          Login
      </button-component>
    </form-component>
  </section>
</template>

<script src='./login.view.js'>
</script>

<style lang="scss" src="./login.view.scss" scoped>
</style>