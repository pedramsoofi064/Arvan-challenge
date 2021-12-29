import client from './clients/default.client'

const resource = '/tags'

export default {
    getTags() {
        return client.post(`${resource}`)
    },
}
