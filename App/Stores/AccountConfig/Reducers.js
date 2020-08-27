/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AccountConfigTypes } from './Actions'

export const fetchAccountConfigLoading = (state) => ({
  ...state,
  accountConfigIsLoading: true,
  accountConfigErrorMessage: null,
})

export const fetchAccountConfigSuccess = (state, { accountConfig }) => ({
  ...state,
  accountConfig: accountConfig,
  accountConfigIsLoading: false,
  accountConfigErrorMessage: null,
})

export const fetchAccountConfigFailure = (state, { errorMessage }) => ({
  ...state,
  accountConfig: [],
  accountConfigIsLoading: false,
  accountConfigErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [AccountConfigTypes.FETCH_ACCOUNT_CONFIG_LOADING]: fetchAccountConfigLoading,
  [AccountConfigTypes.FETCH_ACCOUNT_CONFIG_SUCCESS]: fetchAccountConfigSuccess,
  [AccountConfigTypes.FETCH_ACCOUNT_CONFIG_FAILURE]: fetchAccountConfigFailure,
})
