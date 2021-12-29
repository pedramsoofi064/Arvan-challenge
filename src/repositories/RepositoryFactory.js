
import articlesRepository from "./articles.repository"
import authRepository from "./auth.repository"
import tagRepository from "./tag.repository"
const repositories = new Map(Object.entries({
    auth: authRepository,
    articles: articlesRepository,
    tags: tagRepository
}))


export default {
    get(repositoryName) {
        if (repositories.has(repositoryName))
            return repositories.get(repositoryName)
        throw new Error('invalid repository name!')
    }
}