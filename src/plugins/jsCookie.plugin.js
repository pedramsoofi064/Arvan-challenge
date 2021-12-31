import Vue from 'vue'
import Cookies from 'js-cookie';

const cookie = {
    get(nameSpace) {
        return Cookies.get(nameSpace);
    },
    set(nameSpace, data) {
        Cookies.set(nameSpace, data, {
            expires: 1
        });
    },
    remove(nameSpace) {
        return Cookies.remove(nameSpace)
    }
}

Vue.prototype.$cookie = cookie
export default cookie