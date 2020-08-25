import drawerData from 'App/Route/DrawerData'
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'
import Style from 'App/Components/CustomDrawerContent/CustomDrawerContentStyle'
import { Icon, Text, Image } from 'react-native-elements'
import { View } from 'react-native'
import { Colors } from 'App/Theme'
import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
class CustomDrawerContent extends React.Component {
  render() {
    return (
      <DrawerContentScrollView {...this.props} style={{ padding: 0 }}>
        <View style={Style.avatarContainer}>
          <Image style={Style.avatar} source={require('../../Assets/Images/Drawer/user.png')} />
          <View style={{ paddingLeft: 15 }}>
            <Text style={Style.userName}>{this.props.user.username}</Text>
            <Text style={{ color: Colors.mayaBlue }}>{this.props.user.fullname}</Text>
          </View>
        </View>
        <View style={Style.divider} />
        {drawerData.map((item, idx) => (
          <DrawerItem
            key={`drawer_item-${idx + 1}`}
            label={() => (
              <View style={Style.menuLabelFlex}>
                <Icon name={item.icon} type="material-community" color={Colors.white} />
                <Text style={Style.menuTitle}>{item.name}</Text>
              </View>
            )}
            /* eslint-disable-next-line react/prop-types */
            onPress={() => this.props.navigation.navigate(item.name)}
          />
        ))}
        <View style={Style.divider} />
      </DrawerContentScrollView>
    )
  }
}
CustomDrawerContent.propTypes = {
  user: PropTypes.object,
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
})

export default connect(mapStateToProps, null)(CustomDrawerContent)
