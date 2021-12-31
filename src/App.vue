<template>
  <div class="w-100 h-100">
    <Layout>
      <router-view />
    </Layout>
    <Toast />
  </div>
</template>

<script>
  const Layout = () => import('@/layouts/layoutWrapper.vue');
  const Toast = () => import('@/common/components/toast.component.vue');
  export default {
    components: { Layout, Toast },
  };
</script>

<style lang="scss"></style>
