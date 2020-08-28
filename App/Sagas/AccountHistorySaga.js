import { put, call } from 'redux-saga/effects'
import AccountHistoryAction from 'App/Stores/AccountHistory/Actions'
import { mt4Service } from 'App/Services/MT4Service'
/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchAccountHistory() {
  yield put(AccountHistoryAction.fetchAccountHistoryLoading())
  const response = yield call(mt4Service.fetchAccountHistory)
  if (response) {
    yield put(AccountHistoryAction.fetchAccountHistorySuccess(response))
  } else {
    yield put(
      AccountHistoryAction.fetchAccountHistoryFailure(
        'There was an error while fetching account history informations.'
      )
    )
  }
}
