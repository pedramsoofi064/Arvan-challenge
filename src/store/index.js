import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import articlesModule from './articles';
import tagModule from './tags';
import ToastModule from './toast';
export default new Vuex.Store({
  modules: {
    articlesModule,
    tagModule,
    ToastModule,
  },
});
