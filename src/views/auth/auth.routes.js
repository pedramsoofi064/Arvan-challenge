import authConstants from '@/constants/auth.constants'

const routes = [
    {   
        path: '',
        redirect: authConstants.LOGIN_ROUTE_PATH
    },
    {
        path: authConstants.LOGIN_ROUTE_PATH,
        name: authConstants.LOGIN_ROUTE_NAME,
        component: ()=> import('./login/login.view.vue'),

    },
    {
        path: authConstants.SIGNUP_ROUTE_PATH,
        name: authConstants.SIGNUP_ROUTE_NAME,
        component: ()=> import('./signup/signup.view.vue')
    },
    
]


export default routes