import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as ExampleReducer } from './Example/Reducers'
import { reducer as AuthReducer } from 'App/Stores/Authentication/Reducers'
import { reducer as AccountConfigReducer } from 'App/Stores/AccountConfig/Reducers'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    example: ExampleReducer,
    auth: AuthReducer,
    accountConf: AccountConfigReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
