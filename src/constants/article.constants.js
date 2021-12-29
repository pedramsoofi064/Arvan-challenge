export default {
    ARTICLES_ROUTE_PATH: '/articles',
    ARTICLES_ROUTE_NAME: 'articles',
    PAGE_ROUTE_PATH: 'page/:id',
    PAGE1_ROUTE_PATH: 'page',
    PAGE_ROUTE_NAME: 'page',
    MODIFY1_ROUTE_PATH: ':modify',
    MODIFY_ROUTE_PATH: ':modify/:slug',
    MODIFY_ROUTE_NAME: 'modify',
    LAYOUT: "articles",
    SIDEBAR: {
        title: 'Post',
        links: [
            {
                text: 'All Articles',
                anchor: '/articles/page'
            },
            {
                text: 'New Article',
                anchor: '/articles/craete'
            },
        ]
    }
}