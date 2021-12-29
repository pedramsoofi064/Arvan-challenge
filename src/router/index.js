import Vue from 'vue'
import VueRouter from 'vue-router'

import authMiddleware from '@/middlewares/auth.middleware'
import authConstants from '@/constants/auth.constants'
import authChildren from '@/views/auth/auth.routes'
Vue.use(VueRouter)

const routes = [
    
    {
        path: authConstants.AUTH_ROUTE_PATH,
        name: authConstants.AUTH_ROUTE_NAME,
        component: ()=> import('@/views/auth/auth.view.vue'),
        children: authChildren
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach(authMiddleware)

export default router