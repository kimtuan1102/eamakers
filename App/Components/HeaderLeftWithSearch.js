import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { Colors } from 'App/Theme'

const headerLeftMenuWithSearch = (navigation) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.toggleDrawer()}
      style={{
        paddingLeft: 10,
      }}
    >
      <Icon name="menu" type="material-community" color={Colors.white} />
    </TouchableOpacity>
  )
}
export default headerLeftMenuWithSearch
