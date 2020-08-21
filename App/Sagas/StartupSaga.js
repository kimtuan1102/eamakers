import {select } from 'redux-saga/effects'
import NavigationService from 'App/Services/NavigationService'
import {getToken} from 'App/Stores/Authentication/Selectors'

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup() {
  //Check authentication
  const token = yield select(getToken)
  if(token) {
    NavigationService.navigateAndReset('SplashScreen')
  }
  else {
    NavigationService.navigate('LoginScreen',null)
  }
}
