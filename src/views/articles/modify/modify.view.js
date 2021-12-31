import formComponent from '@/common/components/form.component.vue';
import {
  ValidationProvider
} from 'vee-validate';

import {
  mapState
} from 'vuex';

import RepositoryFactory from '@/repositories/RepositoryFactory';
const tagRepository = RepositoryFactory.get('tag');

export default {
  name: 'modify',
  components: {
    formComponent,
    ValidationProvider
  },
  data() {
    return {
      model: {
        title: '',
        description: '',
        body: '',
        tagList: [],
      },
      newTag: '',
      allTags: [],
      loading: false,
    };
  },
  computed: {
    ...mapState({
      selectedArticle: (state) => state.ArticlesModule.selectedArticle,
    }),
    sortedTags() {
      return this.allTags.sort((a, b) => a.localeCompare(b));
    },
    mode() {
      return this.$route.name;
    },

  },
  watch: {
    newTag(newVal, oldVal) {
      this.allTags = this.allTags.filter((item) => item !== oldVal);
      if (newVal) {
        this.model.tagList = this.model.tagList.filter((item) => item !== oldVal);
        this.allTags = [newVal, ...this.allTags];
        this.model.tagList.push(newVal);
      } else {
        this.model.tagList = this.model.tagList.filter((item) => item !== oldVal);
      }
    },
  },

  async mounted() {

    const {
      data
    } = await tagRepository.getTags();
    this.allTags = data?.tags;
    if (this.mode === 'edit') {
      const {
        slug
      } = this.$route.params;
      if (this.selectedArticle?.slug !== slug) {
        await this.$store.dispatch('ArticlesModule/getOneArticle', slug);
      }
      this.mapDataToModel();
    }

  
  },
  methods: {
    handleSubmit() {
      if (this.mode === 'create') {
        this.createArticle();
      } else {
        this.editArticle();
      }
    },
    async createArticle() {
      this.loading = true;
      try {
        await this.$store.dispatch('ArticlesModule/createArticle', {
          article: this.model
        })
        this.$toast.showMessage({
          content: '<b>Well done!</b> Article created successfuly',
          type: 'success'
        })
        this.loading = false
        this.$router.push('/articles/page')
      } catch {
        this.loading = false
      }

    },
    async editArticle() {
      this.loading = true;
      const {
        slug
      } = this.$route.params;
      try {
        await this.$store.dispatch('ArticlesModule/updateArticle', {
          data: {
            article: this.model
          },
          slug
        })
        this.$toast.showMessage({
          content: '<b>Well done!</b> Article updated successfuly',
          type: 'success'
        })
        this.loading = false
        this.$router.push('/articles/page')
      } catch {
        this.loading = false;
      }

    },
    mapDataToModel() {
      const {
        title,
        description,
        body,
        tagList
      } = this.selectedArticle;
      this.model = {
        title,
        description,
        body,
        tagList,
      };
      this.allTags = [...this.allTags, ...tagList];
    },
  },
};