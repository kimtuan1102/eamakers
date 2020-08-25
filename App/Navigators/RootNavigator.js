import StackNavigationData from 'App/Route/StackNavigatorData'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import headerLeftMenu from 'App/Components/HeaderLeftMenu'
import HomeScreen from 'App/Containers/HomeScreen/HomeScreen'
import convertToRouteConfigMap from 'App/Common/Utils'
const routeConfigMap = convertToRouteConfigMap(StackNavigationData)
const Stack = createStackNavigator(routeConfigMap)
export default createAppContainer(Stack)
