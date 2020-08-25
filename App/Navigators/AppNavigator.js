import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from 'App/Containers/HomeScreen/HomeScreen'
import CustomDrawerContent from 'App/Components/CustomDrawerContent/CustomDrawerContent'
import { Colors } from 'App/Theme'
import React from 'react'

const Drawer = createDrawerNavigator(
  {
    RootStack: HomeScreen,
  },
  {
    contentComponent: CustomDrawerContent,
    style: {
      backgroundColor: Colors.primary,
    },
  }
)
export default createAppContainer(Drawer)
