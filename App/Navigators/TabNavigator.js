import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { convertToRouteConfigMapBottomTab } from '../Common/Utils'
import {TabNavigationDataAdmin} from '../Route/TabNavigatorData'
import store from 'App/Stores'
let state = store().store.getState()
let token = state.auth.token
let TabNavigatorData = {}
console.log("2", token)
const routeConfigMap = convertToRouteConfigMapBottomTab(TabNavigationDataAdmin)
const Tab = createBottomTabNavigator(routeConfigMap)
export default createAppContainer(Tab)
