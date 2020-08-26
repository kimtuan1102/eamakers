import axios from 'axios'
import { Config } from 'App/Config'
const $http = axios.create({
  baseURL: Config.API_URL,
})
export default $http
