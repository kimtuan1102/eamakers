import { put, call } from 'redux-saga/effects'
import AccountConfigAction from 'App/Stores/AccountConfig/Actions'
import { accountService } from 'App/Services/AccountService'
/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchAccountConfig() {
  yield put(AccountConfigAction.fetchAccountConfigLoading())
  const response = yield call(accountService.fetchAccountConfig)
  if (response) {
    yield put(AccountConfigAction.fetchAccountConfigSuccess(response))
  } else {
    yield put(
      AccountConfigAction.fetchAccountConfigFailure(
        'There was an error while fetching account config informations.'
      )
    )
  }
}
