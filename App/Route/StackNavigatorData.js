import { Colors } from 'App/Theme'
import HeaderLeftMenu from 'App/Components/HeaderLeftMenu'
import headerLeftMenuWithSearch from 'App/Components/HeaderLeftWithSearch'
import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import TabNavigator from '../Navigators/TabNavigator'
const StackNavigationData = [
  {
    name: 'Tab Navigator',
    component: TabNavigator,
    headerLeft: HeaderLeftMenu,
    headerTitleStyle: {
      color: Colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Gallery',
    component: ExampleScreen,
    headerLeft: HeaderLeftMenu,
    headerTitleStyle: {
      color: Colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Profile',
    component: ExampleScreen,
    headerLeft: HeaderLeftMenu,
    headerTitleStyle: {
      color: Colors.white,
      fontSize: 18,
    },
  },
]

export default StackNavigationData
