import client from './clients/user.client';

const resource = '/articles';

export default {
  getArticles() {
    return client.get(`${resource}`);
  },
  createArticle(data) {
    return client.post(`${resource}`, data);
  },
  updateArticle(id, data) {
    return client.put(`${resource}/${id}`, data);
  },
  deleteArticle(slug) {
    return client.delete(`${resource}/${slug}`);
  },
  getOneArticle(slug) {
    return client.get(`${resource}/${slug}`);
  },
};
