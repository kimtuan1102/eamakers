import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import CustomDrawerContent from 'App/Components/CustomDrawerContent/CustomDrawerContent'
import NavigatorView from '../Navigators/RootNavigator'
import { Colors } from 'App/Theme'
const Drawer = createDrawerNavigator(
  {
    RootStack: NavigatorView,
  },
  {
    contentComponent: CustomDrawerContent,
    style: {
      backgroundColor: Colors.primary,
    },
  }
)
export default createAppContainer(Drawer)
