<template>
  <main class="article-layout d-flex  w-100 h-100">
    <header-component />
    <div class="d-flex h-100">
      <sidebar-component/>
      <slot />
    </div>
  </main>
</template>

<script>
import HeaderComponent from '@/common/components/header.component.vue';
import SidebarComponent from '@/common/components/sidebar.component.vue';
export default {
  name: 'ArticlesLayout',
  components: {
    HeaderComponent,
    SidebarComponent,
  },
};
</script>

<style lang="scss">
.article-layout {
    flex-direction: column;
}
</style>