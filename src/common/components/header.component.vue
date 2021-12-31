<template>
  <header class="header d-flex justify-space-between align-center grey6">
    <div class="header__info d-flex">
      <span class="title fw-normal">Arvan Challenge</span>
      <span class="d-flex align-center" v-if="username">Welcome {{ username }}</span>
    </div>
    <div class="header__action">
      <button-component class="btn primary btn-outline" @click="logout()">Logout</button-component>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'headerComponent',
    methods: {
      logout() {
        this.$cookie.remove('token');
        this.$cookie.remove('username');
        this.$router.push('/login');
      },
    },
    computed: {
      username() {
        return this.$cookie.get('username');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .header {
    color: white;
    height: 60px;
    padding: 0 20px;
    &__info {
      .title {
        font-size: 1.375em;
        margin-right: 1.25em;
      }
    }

    &__action {
      .btn {
        width: 90px;
        height: 40px;
      }
    }
  }
</style>
