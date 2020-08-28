import StackNavigationData from 'App/Route/StackNavigatorData'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Colors } from 'App/Theme'
const Stack = createStackNavigator()
class RootNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        {StackNavigationData.map((item, idx) => (
          <Stack.Screen
            key={`stack_item-${idx + 1}`}
            name={item.name}
            component={item.component}
            options={{
              headerLeft: () => (
                <item.headerLeft onPress={() => this.props.navigation.toggleDrawer()} />
              ),
              headerStyle: { backgroundColor: Colors.primary },
              headerTitleStyle: item.headerTitleStyle,
            }}
          />
        ))}
      </Stack.Navigator>
    )
  }
}
export default RootNavigator
