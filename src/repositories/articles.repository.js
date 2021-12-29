import client from './clients/default.client'

const resource = '/articles'

export default {
    getArticles(data) {
        return client.get(`${resource}`, data)
    },
    createArticle(data) {
        return client.post(`${resource}`, data)
    },
    updateArticle(id , data) {
        return client.put(`${resource}/${id}` , data)
    },
    deleteArticle(id) {
        return client.delete(`${resource}/${id}`)
    }
}
