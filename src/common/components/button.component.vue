<template>
  <button @click="$emit('click')" class="btn btn-block">
    <div v-if="loading">
      <loading color="#f9f9f9" />
    </div>
    <div class="d-flex justify-center" v-else>
      <slot />
    </div>
  </button>
</template>

<script>
  import Loading from './loading.component.vue';
  export default {
    name: 'buttonComponent',
    components: { Loading },
    props: {
      loading: {
        type: Boolean,
        default: false,
      },
      size: {
        type: String,
        default: 'normal',
      },
    },
  };
</script>

<style lang="scss">
  .btn {
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid var(--grey2-color);
    color: var(--grey6-color);
    background-color: white;

    $colors: primary, success, info, warning, error;
    @each $color in $colors {
      &.#{$color} {
        color: white;
        border-color: var(--#{$color}-color);
        &.btn-outline {
          background-color: transparent !important;
          color: var(--#{$color}-color);
        }
      }
    }
  }
</style>
