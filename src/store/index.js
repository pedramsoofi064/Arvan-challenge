import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import articlesModule from './articles';
export default new Vuex.Store({
  modules: {
    articlesModule,
  },
});
