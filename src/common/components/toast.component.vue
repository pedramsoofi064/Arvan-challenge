<template>
  <div class="toast" :class="[position]">
    <transition-group name="list" tag="div">
      <div v-for="msg in toasts" :key="msg.id" :class="['toast__item', msg.type]">
        <p v-html="msg.message"></p>
      </div>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: 'ToastComponent',
    props: {
      position: {
        type: String,
        default: 'top right',
      },
      timeout: {
        type: Number,
        default: 3000,
      },
    },
    data() {
      return {
        toasts: [],
      };
    },
    created() {
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'ToastModule/showMessage') {
          let { content = '', type = '' } = state?.ToastModule;
          const id = Math.floor(Math.random() * 1000);
          let toast = {
            id,
            message: content,
            type,
          };

          this.toasts.push(toast);
          setTimeout(() => {
            this.toasts = this.toasts.filter((item) => item.id != id);
          }, this.timeout);
        }
      });
    },
  };
</script>

<style lang="scss" scoped>
  .toast {
    position: fixed;
    direction: ltr;
    font-size: 0.8em;
    z-index: 9999;
    &.top {
      top: 80px;
    }
    &.right {
      right: 10px;
    }
    &.bottom {
      bottom: 10px;
    }
    &.left {
      left: 10px;
    }
    &__item {
      padding: 15px;
      height: 50px;
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 300px;
      margin: 7px;
      position: relative;
      overflow: hidden;
      color: white;
      &.success {
        border: solid 1px #d5e6c7 !important;
        background-color: #e2eed8 !important;
        color: #4b713d;
      }
    }
    @keyframes time-out {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(300px);
      }
    }
    .list-enter-active,
    .list-leave-active {
      transition: all 0.4s;
    }
    .list-enter,
    .list-leave-to {
      opacity: 0;
      transform: translateX(300px);
    }
  }
</style>
