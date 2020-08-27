import { AuthenticationTypes } from 'App/Stores/Authentication/Actions'
import $http from 'App/Common/Axios'
const saveAuthToken = (store) => (next) => (action) => {
  if (action.type === AuthenticationTypes.LOGIN_SUCCESS) {
    let token = action.token
    $http.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
  return next(action)
}
export default saveAuthToken
