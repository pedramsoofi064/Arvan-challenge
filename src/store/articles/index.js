import RepositoryFactory from '@/repositories/RepositoryFactory';
const articlesRepository = RepositoryFactory.get('articles');
export default {
  namespaced: true,
  state: {
    articles: [],
    selectedArticle: null,
  },
  actions: {
    async getArticles({
      commit
    }) {
      try {
        const {
          data
        } = await articlesRepository.getArticles()
        commit('getArticles' , data?.articles)

      } catch {
        throw new Error()
      }

    },
    async createArticle({
      commit
    }, payload) {
      try {
        const {
          data
        } = await articlesRepository.createArticle(payload)
        
        commit('createArticle', data.article)
      } catch {
        throw new Error()
      }
    },

  },
  mutations: {
    getArticles(state, payload) {
      state.articles = payload;
    },
    createArticle(state, payload) {
      state.articles.push(payload)

    }
  },
};