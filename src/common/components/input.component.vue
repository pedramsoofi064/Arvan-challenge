<template>
  <div class="custom-input" :class="{ 'custom-input--active': active }">
    <ValidationProvider :rules="rules" :name='label' v-slot="{ errors }">
      <div class="custom-input__container">
        <input
          @focus="
            focus = true;
            $emit('focus');
          "
          @blur="focus = false"
          v-model="inputData"
          :placeholder="placeholder"
          :type="type"
          :readonly="readonly"
          class="custom-input__input"
          :class="{invaid : errors && errors[0]}"
        />
        <label v-if="label" class="custom-input__label">{{ label }}</label>
      </div>
      <div class="custom-input__message">
        <span
          class="custom-input__message-item"
          :style="{
            color: errors && errors[0] ? 'red' : '',
          }"
        >
          <transition name="error-translate">
            <div
              v-if="(errors && errors[0]) || focus"
            >
              <span v-text="errors[0]"></span>
            </div>
          </transition>
        </span>
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
export default {
  components: {
    ValidationProvider,
  },
  props: {
    label: String,
    rules: String,
    readonly: Boolean,
    active: Boolean,
    value: {},
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: ' ',
    },
  
    line: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      inputData: '',
      focus: false,
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.inputData = val;
      },
    },
    inputData(val) {
      this.$emit('input', val);
    },
  },
};
</script>

<style lang="scss">
.custom-input {
  &__container {
    position: relative;
    display: flex;
    align-items: center;
  }
  &__label {
    position: absolute;
    bottom: 5px;
    color: var(--grey6-color);
    pointer-events: none;
    transition: 0.2s ease transform, color;
    left: 5px;
  }

  &__input {
    border: 0;
    outline: 0;
    display: block;
    flex-grow: 1;
    padding: 4px 5px;
    position: relative;

    background-color: white;
    border: 1px solid var(--grey2-color);
    height: 40px;
    border-radius: 4px;

    &.invaid {
        border-color: var(--error-color);
        & ~ .custom-input__label {
            color: var(--error-color);
        }
    }

    &::placeholder {
      color: transparent;
    }

    &:focus::placeholder {
      color: rgb(167, 167, 167);
    }
    &:focus {
      border-color: var(--primary-color);
    }

    &:focus ~ .custom-input__label,
    &:not(:placeholder-shown) ~ .custom-input__label {
      transform: translate(0, -35px);
    }
    &:focus ~ .custom-input__label {
      color: var(--primary-color);
    }
  }
  &__message {
    height: 24px;
    overflow: hidden;
    margin-top: 7px;
  }
  &__message-item {
    font-size: 0.8em;

    &--error {
      color: var(--error-color);
    }
  }
  .error-translate-enter-active,
  .error-translate-leave-active {
    transition: 0.3s ease transform;
  }
  .error-translate-enter, .error-translate-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateY(-20px);
  }
  &--active {
    .custom-input__label {
      color: var(--primary-color) !important;
    }
  }
}
</style>



