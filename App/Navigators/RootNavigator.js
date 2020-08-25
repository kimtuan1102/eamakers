import StackNavigationData from 'App/Route/StackNavigatorData'
import { createStackNavigator } from 'react-navigation'
import React from 'react'
import headerLeftMenu from 'App/Components/HeaderLeftMenu'
const Stack = createStackNavigator()
export default function NavigatorView(props) {
  return (
    <Stack.Navigator>
      {StackNavigationData.map((item, idx) => (
        <Stack.Screen
          key={`stack_item-${idx + 1}`}
          name={item.name}
          component={item.component}
          options={{
            headerLeft: item.headerLeft || headerLeftMenu(props),
            headerTitleStyle: item.headerTitleStyle,
          }}
        />
      ))}
    </Stack.Navigator>
  )
}
