/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { TransactionTypes } from './Actions'

export const fetchTransactionLoading = (state) => ({
  ...state,
  transactionIsLoading: true,
  transactionErrorMessage: null,
})

export const fetchTransactionSuccess = (state, { transaction }) => ({
  ...state,
  transaction: transaction,
  transactionIsLoading: false,
  accountConfigErrorMessage: null,
})

export const fetchTransactionFailure = (state, { errorMessage }) => ({
  ...state,
  transaction: [],
  transactionIsLoading: false,
  transactionErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [TransactionTypes.FETCH_TRANSACTION_LOADING]: fetchTransactionLoading,
  [TransactionTypes.FETCH_TRANSACTION_SUCCESS]: fetchTransactionSuccess,
  [TransactionTypes.FETCH_TRANSACTION_FAILURE]: fetchTransactionFailure,
})
