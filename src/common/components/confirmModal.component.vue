<template>
  <section class="confirm-modal">
    <modal-component :show="show" :title="title" :maxWidth="500" @close="$emit('close')">
      <div class="confirm-modal__message text-grey6">{{ message }}</div>
      <div class="confirm-modal__actions d-flex justify-flex-end">
        <button-component class="btn btn-outline" @click="$emit('close')">
          {{ btnCancel }}
        </button-component>
        <button-component class="btn btn-fill error" @click="$emit('confirm')">
          {{ btnConfirm }}
        </button-component>
      </div>
    </modal-component>
  </section>
</template>

<script>
  import ModalComponent from './modal.component.vue';
  export default {
    name: 'confirmModal',
    props: {
      show: {
        reqiure: true,
        type: Boolean,
        default: false,
      },
      title: {
        reqiure: true,
        type: String,
        default: '',
      },
      message: {
        type: String,
        default: '',
      },
      btnConfirm: {
        type: String,
        default: 'YES',
      },
      btnCancel: {
        reqiure: false,
        type: String,
        default: 'NO',
      },
    },
    components: {
      ModalComponent,
    },
  };
</script>

<style lang="scss" scoped>
  .confirm-modal__message {
    font-weight: 500;
    margin-bottom: 20px;
    padding: 5px 15px;
    padding-bottom: 40px;
    border-bottom: 1px solid var(--grey3-color);
  }
  .confirm-modal__actions {
    padding: 0 15px 10px;
    .btn {
      width: 70px;
      &:first-child {
        margin-right: 15px;
      }
    }
  }
</style>
