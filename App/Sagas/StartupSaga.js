import { select } from 'redux-saga/effects'
import NavigationService from 'App/Services/NavigationService'
import {token} from 'App/Stores/Authentication/Selectors'

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup() {
  //Check authentication
  const token = yield select(token)
  if(token) {
    NavigationService.navigateAndReset('AppNavigator')
  }
  else {
    NavigationService.navigateAndReset('AppNavigator')
  }
}
