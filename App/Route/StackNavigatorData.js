import { Colors } from 'App/Theme'
import headerLeftMenu from 'App/Components/HeaderLeftMenu'
import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import TabNavigator from '../Navigators/TabNavigator'
const StackNavigationData = [
  {
    name: 'Charts',
    component: TabNavigator,
    headerLeft: headerLeftMenu,
    headerTitleStyle: {
      color: Colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Gallery',
    component: ExampleScreen,
    headerLeft: headerLeftMenu,
    headerTitleStyle: {
      color: Colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Profile',
    component: ExampleScreen,
    headerLeft: headerLeftMenu,
    headerTitleStyle: {
      color: Colors.white,
      fontSize: 18,
    },
  },
]

export default StackNavigationData
