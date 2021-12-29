<template>
  <aside class="sidebar primary">
    <div class="sidebar__title">{{ sidebarData.title }}</div>
    <div class="sidebar__items d-flex">
      <router-link
        v-for="(link, index) in sidebarData.links"
        :key="`link-${index}`"
        :to="link.anchor"
        active-class="active"
      >
        {{ link.text }}
      </router-link>
    </div>
  </aside>
</template>

<script>
import articlesCostatnts from '@/constants/article.constants';

export default {
  name: 'sidebarComponent',
  data() {
    return {};
  },
  computed: {
    sidebarData() {
      return articlesCostatnts.SIDEBAR;
    },
  },
};
</script>

<style lang="scss">
.sidebar {
  width: 250px;
  color: white;
  &__title {
    padding: 10px 20px;
  }
  &__items {
    flex-direction: column;
    > a {
      padding: 10px 36px;
      cursor: pointer;
      text-decoration: none;
      color: white;
      &.active {
        background-color: rgba(255, 255, 255, 0.15);
      }
    }
  }
}
</style>