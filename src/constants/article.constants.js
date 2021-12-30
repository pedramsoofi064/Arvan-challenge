export default {
  ARTICLES_ROUTE_PATH: '/articles',
  ARTICLES_ROUTE_NAME: 'articles',
  PAGE_ROUTE_PATH: 'page/:id',
  PAGE1_ROUTE_PATH: 'page',
  PAGE_ROUTE_NAME: 'page',
  CREATE_ROUTE_PATH: 'create',
  CREATE_ROUTE_NAME: 'create',
  EDIT_ROUTE_PATH: 'edit/:slug',
  EDIT_ROUTE_NAME: 'edit',
  LAYOUT: 'articles',
  SIDEBAR: {
    title: 'Post',
    links: [
      {
        text: 'All Articles',
        anchor: '/articles/page',
      },
      {
        text: 'New Article',
        anchor: '/articles/create',
      },
    ],
  },
};
