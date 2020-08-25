import { Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon, Text } from 'react-native-elements'

const headerLeftMenu = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.toggleDrawer()}
      style={{
        paddingLeft: 10,
      }}
    >
      <Icon name="menu" type="material-community" />
    </TouchableOpacity>
  )
}
export default headerLeftMenu
