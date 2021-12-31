import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import ArticlesModule from './articles';
import ToastModule from './toast';
export default new Vuex.Store({
  modules: {
    ArticlesModule,
    ToastModule,
  },
});
