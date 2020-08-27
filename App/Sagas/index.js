import { takeLatest, all } from 'redux-saga/effects'
import { AuthenticationTypes } from 'App/Stores/Authentication/Actions'
import { AccountConfigTypes } from 'App/Stores/AccountConfig/Actions'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { fetchUser } from './ExampleSaga'
import { fetchAccountConfig } from 'App/Sagas/AccountConfigSaga'
import { login } from 'App/Sagas/AuthenticationSaga'

export default function* root() {
  yield all([
    takeLatest(AccountConfigTypes.FETCH_ACCOUNT_CONFIG, fetchAccountConfig),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
    // Login
    takeLatest(AuthenticationTypes.LOGIN, login),
  ])
}
