import {Colors, Fonts} from 'App/Theme'
import headerLeftMenu from 'App/Components/HeaderLeftMenu'
import HomeScreen from 'App/Containers/HomeScreen/HomeScreen'
import ExampleScreen from 'App/Containers/Example/ExampleScreen'
const StackNavigationData = [
  {
    name: 'Charts',
    component: HomeScreen,
    headerLeft: headerLeftMenu,
    headerTitleStyle: {
      fontFamily: Fonts.normal,
      color: Colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Gallery',
    component: ExampleScreen,
    headerLeft: headerLeftMenu,
    headerTitleStyle: {
      fontFamily: Fonts.normal,
      color: Colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Profile',
    component: ExampleScreen,
    headerLeft: headerLeftMenu,
    headerTitleStyle: {
      fontFamily: Fonts.normal,
      color: Colors.white,
      fontSize: 18,
    },
  },
]

export default StackNavigationData;
