<template>
  <section v-if="show" class="modal w-100 h-100">
    <div class="modal__bg" @click="$emit('close')"></div>
    <div class="w-100 h-100 d-flex justify-center align-center">
      <div class="modal__main" :style="{ maxWidth: `${maxWidth}px` }">
        <div class="modal__header d-flex align-center justify-space-between">
          <span class="modal__title fw-bold text-grey6">{{ title }}</span>
          <span class="modal__close" @click="$emit('close')">&times;</span>
        </div>
        <div class="modal__content">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'base-model',
    props: {
      show: {
        reqiure: true,
        type: Boolean,
        default: false,
      },
      maxWidth: {
        reqiure: true,
        type: Number,
        default: 250,
      },
      title: {
        reqiure: true,
        type: String,
        default: '',
      },
    },
  };
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;

    z-index: 10;
    top: 0;
    left: 0;
    transition: all 1s;
    &__bg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: black;
      opacity: 0.24;
      z-index: 10;
    }

    &__main {
      background-color: white;
      z-index: 11;
      border-radius: 3px;
      border: solid 1px var(--grey3-color);
      width: 100%;
    }

    &__header {
      font-size: 20px;
      border-bottom: 1px solid var(--grey3-color);
      padding: 10px 15px;
      margin-bottom: 15px;
    }

    &__close {
      cursor: pointer;
      font-size: 30px;
      font-weight: bold;
      color: var(--grey3-color);
    }
  }
</style>
