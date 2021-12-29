import client from './clients/default.client'

const resource = '/users'

export default {
    login(data) {
        return client.post(`${resource}/login`, data)
    },
    register(data) {
        return client.post(`${resource}/`, data)
    }
}
