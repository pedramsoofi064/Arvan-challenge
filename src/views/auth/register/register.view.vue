<template>
  <section class="auth_section signup">
    <h1 class="auth__title text-center">REGISTER</h1>
    <form-component auto-validation @submit="register()">
      <input-component v-model="model.username" rules="required" class="form__input" label="User" />
      <input-component v-model="model.email" rules="required|email" class="form__input" label="Email" />
      <input-component
        v-model="model.password"
        rules="required"
        type="password"
        class="form__input"
        label="Password"
      />
      <button-component :loading="loading" class="btn primary w-100" type="submit">
        Register
      </button-component>
    </form-component>

    <div class="auth__subtitle d-flex">
      <span class="subtitle__text">Already Registered?</span>
      <router-link to="/login" class="subtitle__link fw-bold">login</router-link>
    </div>
  </section>
</template>

<script src="./register.view.js"></script>

<style lang="scss" src="./register.view.scss" scoped></style>
