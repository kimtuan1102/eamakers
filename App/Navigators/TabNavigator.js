import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import { convertToRouteConfigMapBottomTab } from '../Common/Utils'
import TabNavigationData from '../Route/TabNavigatorData'
import HomeScreen from '../Containers/HomeScreen/HomeScreen'
import ExampleScreen from '../Containers/Example/ExampleScreen'
const routeConfigMap = convertToRouteConfigMapBottomTab(TabNavigationData)
const Tab = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
      },
    },
    Example: {
      screen: ExampleScreen,
      navigationOptions: {
        tabBarLabel: 'Example',
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
)
export default createAppContainer(Tab)
