import { mapState } from 'vuex';

import TableComponent from '@/common/components/table.component.vue';
import ConfirmModalComponent from '@/common/components/confirmModal.component.vue';
export default {
  name: 'Page',
  components: {
    TableComponent,
    ConfirmModalComponent,
  },
  data() {
    return {
      confirmDeleteModal: false,
      tableHeaders: [
        {
          text: '#',
          item: 'id',
          type: 'number',
          sort: true,
        },
        {
          text: 'Title',
          item: 'title',
          sort: true,
        },
        {
          text: 'Author',
          item: 'author',
          sort: true,
        },
        {
          text: 'Tags',
          item: 'tags',
          sort: true,
        },
        {
          text: 'Excerpt',
          item: 'excerpt',
          sort: true,
        },
        {
          text: 'Created',
          item: 'created',
          sort: true,
        },
      ],
    };
  },
  computed: {
    ...mapState({
      articles: (state) => state.ArticlesModule.articles,
    }),
    tableBody() {
      return this.articles.map((item, index) => {
        let { title, author, tagList, body, createdAt } = item;

        return {
          id: index + 1,
          title,
          author: `@${author.username}`,
          tags: tagList,
          excerpt: body.slice(0, 19),
          created: this.dateGenerator(new Date(createdAt)),
          showMore: false,
        };
      });
    },
  },
  mounted() {
    this.$store.dispatch('ArticlesModule/getArticles');
  },
  methods: {
    dateGenerator(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      return date.toLocaleString('en-US', options);
    },
    handleEdit(item) {
      item;
    },
    handleDelete(item) {
      item;
      this.confirmDeleteModal = true;
    },
    deleteArticle() {},
  },
};
