import StackNavigationData from 'App/Route/StackNavigatorData'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { convertToRouteConfigMapStack } from 'App/Common/Utils'
const routeConfigMap = convertToRouteConfigMapStack(StackNavigationData)
const Stack = createStackNavigator(routeConfigMap)
export default createAppContainer(Stack)
