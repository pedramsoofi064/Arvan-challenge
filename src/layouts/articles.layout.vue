<template>
  <main class="article-layout w-100 h-100">
    <header-componnet />
    <div class="d-flex">
      <slot />
    </div>
  </main>
</template>

<script>
import HeaderComponnet from '@/common/components/header.component.vue';
export default {
  name: 'ArticlesLayout',
  components: {
    HeaderComponnet,
  },
};
</script>

<style>
</style>