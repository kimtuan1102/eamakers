import { put, call } from 'redux-saga/effects'
import TransactionAction from 'App/Stores/Transaction/Actions'
import { transactionService } from 'App/Services/TransactionService'
/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchTransaction() {
  yield put(TransactionAction.fetchTransactionLoading())
  const response = yield call(transactionService.fetchTransactions)
  if (response) {
    yield put(TransactionAction.fetchTransactionSuccess(response))
  } else {
    yield put(
      TransactionAction.fetchTransactionFailure(
        'There was an error while fetching account config informations.'
      )
    )
  }
}
