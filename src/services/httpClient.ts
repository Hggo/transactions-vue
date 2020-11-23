import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://warren-transactions-api.herokuapp.com/api/',
  timeout: 10000
})

export default httpClient
