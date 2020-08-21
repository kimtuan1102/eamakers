import {createStackNavigator} from "react-navigation";
import LoginScreen from 'App/Containers/LoginScreen/LoginScreen'

const AuthNavigator = createStackNavigator(
  {
      LoginScreen: LoginScreen,
  },
  {
    headerMode: 'none'
  }
)
export default AuthNavigator
