import articlesCostatnts from '@/constants/article.constants'


const routes = [
    {
        path: articlesCostatnts.PAGE1_ROUTE_PATH,
        name: articlesCostatnts.PAGE_ROUTE_NAME,
        component: () => import('./page/page.view.vue'),
        meta: {
            layout: articlesCostatnts.LAYOUT
        }
    },
    {
        path: articlesCostatnts.PAGE_ROUTE_PATH,
        name: articlesCostatnts.PAGE_ROUTE_NAME,
        component: () => import('./page/page.view.vue'),
        meta: {
            layout: articlesCostatnts.LAYOUT
        }
    },
    {
        path: articlesCostatnts.MODIFY_ROUTE_PATH,
        name: articlesCostatnts.MODIFY_ROUTE_NAME,
        component: () => import('./modify/modify.view.vue'),
        meta: {
            layout: articlesCostatnts.LAYOUT
        }
    },
    {
        path: articlesCostatnts.MODIFY1_ROUTE_PATH,
        name: articlesCostatnts.MODIFY_ROUTE_NAME,
        component: () => import('./modify/modify.view.vue'),
        meta: {
            layout: articlesCostatnts.LAYOUT
        }
    },
]

export default routes