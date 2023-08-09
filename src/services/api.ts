import axios from 'axios'

export const apiUserGithub = axios.create({
  baseURL: 'https://api.github.com/users/',
})

export const searchApi = axios.create({
  baseURL: 'https://api.github.com/search/',
})

export const dataCompleteIssuesApi = axios.create({
  baseURL:
    'https://api.github.com/repos/WesleiPossidonio/Desafio-Ignite-Github/issues/',
})
