import Vue from 'vue'
import VueRouter from 'vue-router'

import authMiddleware from '@/middlewares/auth.middleware'
import authConstant from '@/constants/auth.constant'

Vue.use(VueRouter)

const routes = [
    {
        path: authConstant.AUTH_ROUTE_PATH,
        name: authConstant.AUTH_ROUTE_NAME,
        component: ()=> import('@/views/auth/auth.view.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach(authMiddleware)

export default router