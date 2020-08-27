import StackNavigationData from 'App/Route/StackNavigatorData'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Colors } from 'App/Theme'
const Stack = createStackNavigator()
class RootNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {StackNavigationData.map((item, idx) => (
            <Stack.Screen
              key={`stack_item-${idx + 1}`}
              name={item.name}
              component={item.component}
              options={{
                headerLeft: item.headerLeft,
                headerStyle: { backgroundColor: Colors.primary },
                headerTitleStyle: item.headerTitleStyle,
                headerShown: !!item.headerLeft,
              }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
export default RootNavigator
