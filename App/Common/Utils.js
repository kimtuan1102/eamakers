import headerLeftMenu from 'App/Components/HeaderLeftMenu'
import { Icon } from 'react-native-elements'
import { Colors } from '../Theme'
import React from 'react'

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
        }),
      },
    }
  }, initialValue)
}

export const convertToRouteConfigMapBottomTab = (array) => {
  const initialValue = {}
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item['name']]: {
        screen: item.component,
        navigationOptions: {
          tabBarIcon: <Icon name={item.icon} type="material-community" />,
          tabBarLabel: item.name,
        },
      },
    }
  }, initialValue)
}
