import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { Colors } from 'App/Theme'

class HeaderLeftMenu extends React.Component{
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          paddingLeft: 10,
        }}
      >
        <Icon name="menu" type="material-community" color={Colors.white} />
      </TouchableOpacity>
    )
  }
}
export default HeaderLeftMenu
