import axios from 'axios'

const BASE_URL = 'https://api.github.com'

export const Instance = axios.create({
  baseURL: BASE_URL,
})

Instance.interceptors.request.use((config) => {
  const token = process.env.REACT_APP_API_KEY

  if (token != null) {
    config.headers.Authorization = `Bearer ${token}`
    config.headers.Accept = 'application/vnd.github+json'
  }

  return config
})
