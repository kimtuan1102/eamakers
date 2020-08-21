/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AuthenticationTypes } from './Actions'
const jwtDecode = require('jwt-decode');
export const loginLoading = (state) => ({
  ...state,
  loginLoading: true,
  loginError: null
})

export const loginSuccess = (state, { token }) => ({
  ...state,
  token: token,
  user: jwtDecode(token),
  loginLoading: false,
  loginError: null,
})

export const loginFailure = (state, { error }) => ({
  ...state,
  token: null,
  loginLoading: false,
  loginError: error,
})
export const logout = (state) =>({
  ...state,
  token: null,
  user: {},
  loginLoading: false,
  loginError: null
})
/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [AuthenticationTypes.LOGIN_LOADING]: loginLoading,
  [AuthenticationTypes.LOGIN_SUCCESS]: loginSuccess,
  [AuthenticationTypes.LOGIN_FAILED]: loginFailure,
  [AuthenticationTypes.LOGOUT]: logout
})
