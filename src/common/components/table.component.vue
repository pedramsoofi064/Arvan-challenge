<template>
  <div class="costum-table">
    <table class="costum-table__table">
      <thead class="costum-table__header">
        <tr>
          <th v-for="(th, index) in headers" :key="index" class="costum-table__header-item">
            {{ th.text }}
          </th>
          <th class="costum-table__header-item"> </th>
        </tr>
      </thead>
      <tbody class="costum-table__body">
        <tr v-for="(tr, trIndex) in pageItems" :key="'tr_' + trIndex" class="costum-table__body-row">
          <td v-for="(td, tdIndex) in headers" :key="'td_' + tdIndex" class="costum-table__body-item">
            {{ tr[td.item] }}
          </td>

          <td class="costum-table__body-item">
            <button-component @click="tr.showMore = !tr.showMore" class="info d-flex action-btn">
              <span class="action-btn__text">...</span>
              <span class="action-btn__icon">></span>

              <div v-if="tr.showMore" class="more-tab d-flex">
                <span class="text-left" @click="handleAction('edit', tr)">Edit</span>
                <span class="text-left" @click="handleAction('delete', tr)">Delete</span>
              </div>
            </button-component>
          </td>
        </tr>
        <tr v-if="!pageItems.length" class="costum-table__body-row">
          <td class="costum-table__body-item" style="border-radius: 5px"> empty list !!</td>
        </tr>
      </tbody>
    </table>
    <pagination v-model="page" :length="totalPage" />
  </div>
</template>

<script>
  // components
  import Pagination from './pagination.component.vue';

  export default {
    components: { Pagination },
    props: {
      headers: {
        type: Array,
      },
      items: {
        type: Array,
        repeated: true,
      },
      actions: {
        type: Array,
      },
      paginate: {
        type: Boolean,
      },
      limit: {
        type: Number,
        default: 10,
      },
    },
    data() {
      return {
        totalItems: [],
        page: 1,
        pageItems: [],
        totalPage: 1,
      };
    },
    watch: {
      page: {
        immediate: true,
        handler() {
          this.calculatePage();
        },
      },
      items: {
        deep: true,
        handler(val) {
          this.totalItems = JSON.parse(JSON.stringify(val));
          this.calculatePage();
        },
      },
    },
    mounted() {
      this.totalItems = JSON.parse(JSON.stringify(this.items));
      this.calculatePage();
    },
    methods: {
      sortItems(val) {
        if (val.item === this.sort.item) this.sort.ASC = !this.sort.ASC;
        this.sort.item = val.item;
        if (val.type === 'number') {
          this.totalItems.sort((a, b) => {
            return a[val.item] - b[val.item];
          });
        } else if (val.type === 'date') {
          this.totalItems.sort((a, b) => {
            const ca = +a[val.item].replace(/\//g, '');
            const cb = +b[val.item].replace(/\//g, '');
            return ca - cb;
          });
        } else {
          this.totalItems.sort((a, b) => {
            const ca = a[val.item].toUpperCase();
            const cb = b[val.item].toUpperCase();
            if (ca < cb) {
              return -1;
            }
            if (ca > cb) {
              return 1;
            }
            return 0;
          });
        }
        if (!this.sort.ASC) {
          this.totalItems.reverse();
        }

        this.calculatePage();
      },
      calculatePage() {
        if (this.paginate) {
          this.totalPage = Math.ceil(this.totalItems?.length / this.limit);
          const start = this.limit * (this.page - 1);
          const end = start + this.limit;
          this.pageItems = this.totalItems.slice(start, end);
        } else {
          this.pageItems = this.totalItems;
        }
      },
      handleAction(emitEvent, item) {
        this.$emit(emitEvent, JSON.parse(JSON.stringify(item)));
      },
    },
  };
</script>

<style lang="scss" scoped>
  .costum-table {
    width: 100%;
    text-align: center;
    overflow-x: auto;
    @media screen and (max-width: 768px) {
      width: 97vw;
      margin: auto;
    }
    &__table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0 10px;
    }
    &__header {
      background-color: #00000007;
      border-radius: 5px;
    }
    &__header-item {
      font-size: 0.8em;
      text-align: center;
      padding: 10px 2px;
      &:first-child {
        padding-right: 15px;
        border-radius: 0 5px 5px 0;
      }
      &:last-of-type {
        padding-left: 15px;
        border-radius: 5px 0 0 5px;
      }
    }
    &__body-row {
      box-shadow: 0 1px 1px 0 rgba(226, 226, 226, 0.5);
      background-color: #fff;
      transition: 0.3s background;
      &:hover {
        background-color: rgba(0, 0, 0, 0.027);
      }
    }
    &__body-item {
      font-size: 0.8em;
      padding: 10px 2px;
      &:first-child {
        padding-right: 15px;
        border-radius: 0 5px 5px 0;
      }
      &:last-of-type {
        padding-left: 15px;
        border-radius: 5px 0 0 5px;
      }

      .action-btn {
        padding: 0;
        position: relative;
        span {
          color: white;
          padding: 5px 10px;
        }

        .action-btn__icon {
          transform: rotate(90deg);
        }

        .more-tab {
          width: 175px;

          height: 80px;
          position: absolute;
          background-color: white;
          top: 100%;
          flex-direction: column;
          border-radius: 4px;
          z-index: 999;
          border: 1px solid var(--grey2-color);
          right: 10px;
          > span {
            flex: 1;
            color: var(--grey6-color);
            &:first-child {
              border-bottom: 1px solid var(--grey2-color);
            }
            &:hover {
              background-color: var(--grey2-color);
            }
          }
        }
      }
    }

    .pagination-container {
      margin-top: 1em;
    }
  }
</style>
