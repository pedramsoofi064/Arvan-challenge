import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/styles/main.scss'
import '@/plugins/index'

Vue.config.productionTip = false

import inputComponent from '@/common/components/input.component.vue'
import buttonComponent from '@/common/components/button.component.vue'

Vue.component('input-component' , inputComponent)
Vue.component('button-component' , buttonComponent)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')