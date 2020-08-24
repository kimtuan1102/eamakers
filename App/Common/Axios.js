import axios from 'axios'
import { Config } from 'App/Config'
import store from 'App/Stores'

const $http = axios.create({
  baseURL: Config.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
$http.interceptors.request.use(
  config => {
    //
    // if (token) {
    //     config.headers = {
    //         Authorization: `Bearer ${token}`
    //     }
    // }
    return config
  },
  err => Promise.reject(err),
)
export default $http
