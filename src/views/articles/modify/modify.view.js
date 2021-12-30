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
    };
  },
  computed: {
    ...mapState({
      tags: (state) => state.tagModule.tags,
    }),
    mode() {
      return this.$route.name;
    },
    // allTags() {
    //     return [
    //         this.newTag,
    //         ...this.tags
    //     ]
    // }
  },
  watch: {
    newTag(newVal, oldVal) {
      if (this.newTag) {
        this.allTags = [newVal, ...this.tags];
        this.model.tagList = this.model.tagList.filter((item) => item !== oldVal);
        this.model.tagList.push(newVal);
      } else {
        this.allTags = this.tags;
        this.model.tagList = this.model.tagList.filter((item) => item !== oldVal);
      }
    },
  },
  mounted() {
    this.allTags = this.tags;
  },
};
