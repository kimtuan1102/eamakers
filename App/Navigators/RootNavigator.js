import {createSwitchNavigator, createAppContainer} from "react-navigation";
import AppNavigator from "App/Navigators/AppNavigator";
import LoadingScreen from "App/Containers/LoadingScreen/LoadingScreen";
import AuthNavigator from "App/Navigators/AuthNavigator";


const RootNavigator = createSwitchNavigator(
    {
        LoadingScreen: LoadingScreen,
        AuthNavigator: AuthNavigator,
        AppNavigator: AppNavigator,
    }, {
        initialRouteName: 'LoadingScreen',
    });

export default createAppContainer(RootNavigator)
