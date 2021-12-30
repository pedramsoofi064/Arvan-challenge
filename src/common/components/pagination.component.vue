<template>
  <div class="pagination">
    <button-component @click="prevPage()" size="small" color="#fff" class="pagination__button ml-3">
      {{ nextPageIcon }}
    </button-component>
    <div v-for="i in pages" :key="i" class="pagination__item">
      <button-component
        @click="currentPage = i"
        v-if="i.toString().indexOf('split') === -1"
        size="small"
        color="#fff"
        class="pagination__button"
        :class="{ 'pagination__button--active': i === value }"
        >{{ i }}</button-component
      >
      <div v-else class="mx-3">...</div>
    </div>
    <button-component @click="nextPage()" size="small" color="#fff" class="pagination__button mr-3">
      {{ prevPageIcon }}
    </button-component>
  </div>
</template>

<script>
  // components
  export default {
    props: {
      value: {
        type: Number,
        required: true,
      },
      length: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        nextPageIcon: '>',
        prevPageIcon: '<',
        pages: [],
      };
    },
    watch: {
      length: {
        immediate: true,
        handler() {
          console.log(this.length);
          this.calculatePages();
        },
      },
    },
    computed: {
      currentPage: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
          this.$nextTick(() => {
            this.calculatePages();
          });
        },
      },
    },
    methods: {
      prevPage() {
        if (this.value !== 1) this.currentPage--;
      },
      nextPage() {
        if (this.value !== this.length) this.currentPage++;
      },
      calculatePages() {
        this.pages = [];
        if (this.length <= 5) {
          for (let i = 1; i < this.length + 1; i++) {
            this.pages.push(i);
          }
          return;
        }
        let prev = this.value - 1;
        let next = this.value + 1;
        if (prev === 0) {
          prev = 1;
        }
        if (this.value > 2) {
          this.pages.push(1);
          if (this.value > 3) {
            this.pages.push('split1');
          }
        }
        if (this.value === this.length) {
          prev = prev - 2;
        } else if (this.value === this.length - 1) {
          prev = prev - 1;
        }
        if (this.value === 1) {
          next = next + 2;
        } else if (this.value === 2) {
          next = next + 1;
        }
        for (var plength = prev; plength <= next; plength++) {
          if (plength > this.length) {
            continue;
          }
          if (plength === 0) {
            plength = plength + 1;
          }
          this.pages.push(plength);
        }

        if (this.value < this.length - 1) {
          if (this.value < this.length - 2) {
            this.pages.push('split2');
          }
          this.pages.push(this.length);
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .pagination {
    display: flex;
    justify-content: center;
    user-select: none;
    &__button {
      width: 40px;
      margin: 4px;
      transition: 0.3s ease;
      &--active {
        background-color: var(--primary-color) !important;
        color: #fff !important;
      }
    }
  }
</style>
