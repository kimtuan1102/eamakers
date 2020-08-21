import { put, call } from 'redux-saga/effects'
import AuthenticationAction from 'App/Stores/Authentication/Actions'
import { authService } from 'App/Services/AuthService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* login(user, password) {
  yield put(AuthenticationAction.loginLoading())
  const response = yield call(authService.login(user,password))
  if(response) {
    yield put(AuthenticationAction.loginSuccess(response))
  }
  else {
    yield put(AuthenticationAction.loginFailed("User or password incorrect"))
  }
}
