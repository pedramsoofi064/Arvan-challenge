import formComponent from '@/common/components/form.component.vue';
import { mapState } from 'vuex';

export default {
  name: 'modify',
  components: {
    formComponent,
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
      tags: (state) => state.tagModule.tags,
      selectedArticle: (state) => state.articlesModule.selectedArticle,
    }),
    mode() {
      return this.$route.name;
    },
    sortedTags() {
      return this.allTags.sort((a, b) => a.localeCompare(b));
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
  mounted() {
    this.allTags = this.tags;
    if (this.mode === 'edit') {
      const slug = this.$route.params;
      if (this.selectedArticle?.slug !== slug) {
        //TODO
      }
      this.mapDataToModel();
    }
  },
  methods: {
    mapDataToModel() {
      const { title, description, body, tagList } = this.selectedArticle;
      this.model = {
        title,
        description,
        body,
        tagList,
      };
      this.allTags = [...tagList, ...this.tags];
    },
  },
};
