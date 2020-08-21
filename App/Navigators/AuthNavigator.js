import {createStackNavigator} from "react-navigation";
import HomeScreen from "App/Containers/HomeScreen/HomeScreen";

const AuthNavigator = createStackNavigator({
    Home: HomeScreen
});

export default AuthNavigator
