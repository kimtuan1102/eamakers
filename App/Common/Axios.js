import axios from 'axios';
import {Config} from "App/Config";
import store from "App/Stores";
const $http = axios.create({
   baseURL: Config.API_URL
});
$http.interceptors.request.use(
    config => {
        const state = store.getState();
        if (state.token) {
            config.headers = {
                Authorization: `Bearer ${state.token}`
            }
        }
        return config
    },
    err => Promise.reject(err)
);
export default $http
