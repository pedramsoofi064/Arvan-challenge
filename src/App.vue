<template>
  <Layout>
    <router-view />
    <Toast />
  </Layout>
</template>

<script>
  const Layout = () => import('@/layouts/layoutWrapper.vue');
  const Toast = () => import('@/common/components/toast.component.vue')
  export default {
    components: { Layout , Toast },
  };
</script>

<style lang="scss"></style>
