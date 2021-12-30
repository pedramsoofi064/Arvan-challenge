import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import articlesModule from './articles';
import tagModule from './tags';
export default new Vuex.Store({
  modules: {
    articlesModule,
    tagModule,
  },
});
