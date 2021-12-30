<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>
  const Layout = () => import('@/layouts/layoutWrapper.vue');

  export default {
    components: { Layout },
  };
</script>

<style lang="scss"></style>
