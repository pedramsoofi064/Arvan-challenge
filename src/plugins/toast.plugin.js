import Vue from 'vue'
import store from '@/store'
const toast = {
    showMessage({
        content = '',
        type = ''
    }) {
        store.commit('ToastModule/showMessage', {
            content,
            type
        })
    },

}
Vue.prototype.$toast = toast
export default toast