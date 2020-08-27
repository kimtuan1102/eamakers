import headerLeftMenu from 'App/Components/HeaderLeftMenu'
import { Icon } from 'react-native-elements'
import React from 'react'
import { Colors } from 'App/Theme'
export const convertToRouteConfigMapStack = (array) => {
  const initialValue = {}
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item['name']]: {
        screen: item.component,
        navigationOptions: ({ navigation }) => ({
          headerLeft: item.headerLeft(navigation) || headerLeftMenu(navigation),
          headerTitleStyle: item.headerTitleStyle,
          headerStyle: { backgroundColor: Colors.primary },
        }),
      },
    }
  }, initialValue)
}

export const getRole = (user) => {
  if (user) {
    if (user.is_superuser) {
      return 'superuser'
    } else if (user.is_admin) {
      return 'admin'
    } else if (user.is_lead) {
      return 'lead'
    }
  }
  return 'guest'
}
