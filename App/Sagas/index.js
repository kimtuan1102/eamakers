import { takeLatest, all } from 'redux-saga/effects'
import { AuthenticationTypes } from 'App/Stores/Authentication/Actions'
import { AccountConfigTypes } from 'App/Stores/AccountConfig/Actions'
import { fetchAccountConfig } from 'App/Sagas/AccountConfigSaga'
import { fetchAccountHistory } from 'App/Sagas/AccountHistorySaga'
import { login } from 'App/Sagas/AuthenticationSaga'
import { AccountHistoryTypes } from 'App/Stores/AccountHistory/Actions'
import { TransactionTypes } from 'App/Stores/Transaction/Actions'
import { fetchTransaction } from 'App/Sagas/TransactionSaga'

export default function* root() {
  yield all([
    takeLatest(TransactionTypes.FETCH_TRANSACTION, fetchTransaction),
    takeLatest(AccountHistoryTypes.FETCH_ACCOUNT_HISTORY, fetchAccountHistory),
    takeLatest(AccountConfigTypes.FETCH_ACCOUNT_CONFIG, fetchAccountConfig),
    takeLatest(AuthenticationTypes.LOGIN, login),
  ])
}
