import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
const headerLeftMenu = (navigation) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.toggleDrawer()}
      style={{
        paddingLeft: 10,
      }}
    >
      <Icon name="menu" type="material-community"/>
    </TouchableOpacity>
  )
}
export default headerLeftMenu
