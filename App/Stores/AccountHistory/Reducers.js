/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AccountHistoryTypes } from './Actions'

export const fetchAccountHistoryLoading = (state) => ({
  ...state,
  accountHistoryIsLoading: true,
  accountHistoryErrorMessage: null,
})

export const fetchAccountHistorySuccess = (state, { accountHistory }) => ({
  ...state,
  accountHistory: accountHistory,
  accountHistoryIsLoading: false,
  accountHistoryErrorMessage: null,
})

export const fetchAccountHistoryFailure = (state, { errorMessage }) => ({
  ...state,
  accountHistory: [],
  accountHistoryIsLoading: false,
  accountHistoryErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [AccountHistoryTypes.FETCH_ACCOUNT_HISTORY_LOADING]: fetchAccountHistoryLoading,
  [AccountHistoryTypes.FETCH_ACCOUNT_HISTORY_SUCCESS]: fetchAccountHistorySuccess,
  [AccountHistoryTypes.FETCH_ACCOUNT_HISTORY_FAILURE]: fetchAccountHistoryFailure,
})
