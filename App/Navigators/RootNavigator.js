import {createSwitchNavigator, createAppContainer} from "react-navigation";
import AppNavigator from "App/Navigators/AppNavigator";
import AuthLoadingScreen from "App/Containers/AuthLoadingScreen/AuthLoadingScreen";
import AuthNavigator from "App/Navigators/AuthNavigator";


const RootNavigator = createSwitchNavigator(
    {
        AuthLoadingScreen: AuthLoadingScreen,
        AppNavigator: AppNavigator,
        AuthNavigator: AuthNavigator
    }, {
        initialRouteName: 'AuthLoadingScreen',
    });

export default createAppContainer(RootNavigator)
