import RepositoryFactory from '@/repositories/RepositoryFactory';
const articlesRepository = RepositoryFactory.get('articles');
export default {
  namespaced: true,
  state: {
    articles: [],
    selectedArticle: null,
  },
  actions: {
    setState({commit}, payload) {
      commit('setState', payload)
    },
    async getArticles({
      commit
    }) {
      try {
        const {
          data
        } = await articlesRepository.getArticles()
        commit('getArticles', data?.articles)

      } catch {
        throw new Error()
      }

    },
    async getOneArticle({commit} , slug){
      try {
        const {data} = await articlesRepository.getOneArticle(slug);
        commit('setState' , {
          selectedArticle: data?.article
        })
      }
      catch {
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
    async updateArticle({
      commit
    }, payload) {
      try {
        const {
          data
        } = await articlesRepository.updateArticle(payload.slug , payload.data)
        console.log(data);
        commit
        // commit('updateArticle', data.article)
      } catch {
        throw new Error()
      }
    },

    async deleteArticle({commit , state}) {
      try {
        const slug = state.selectedArticle.slug
        await articlesRepository.deleteArticle(slug);
        commit('deleteArticle' ,slug )
      }
      catch {
        throw new Error()
      }
    }

  },
  mutations: {
    getArticles(state, payload) {
      state.articles = payload;
    },
    createArticle(state, payload) {
      state.articles.push(payload)

    },
    setState(state, payload) {
      Object.keys(payload).map((key) => {
        state[key] = payload[key]
      })
    },
    deleteArticle(state , slug){
      state.articles = state.articles.filter(item => item.slug !== slug)
    },
    updateArticle(state , slug){
      state.articles = state.articles.filter(item => item.slug !== slug)
    },
  },
};