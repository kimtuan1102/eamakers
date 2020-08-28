import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as AuthReducer } from 'App/Stores/Authentication/Reducers'
import { reducer as AccountConfigReducer } from 'App/Stores/AccountConfig/Reducers'
import { reducer as AccountHistoryReducer } from 'App/Stores/AccountHistory/Reducers'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    auth: AuthReducer,
    accountConf: AccountConfigReducer,
    mt4: AccountHistoryReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
