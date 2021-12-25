import Vue from 'vue'
import VueRouter from 'vue-router'

import authMiddleware from '@/middlewares/auth.middleware'


Vue.use(VueRouter)

const routes = []

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach(authMiddleware)

export default router