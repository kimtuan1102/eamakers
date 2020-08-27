import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  TabNavigationDataSupperAdmin,
  TabNavigationDataAdmin,
  TabNavigationDataLead,
  TabNavigationDataGuest,
} from '../Route/TabNavigatorData'
import React from 'react'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { PropTypes } from 'prop-types'
import { getRole } from 'App/Common/Utils'
const Tab = createBottomTabNavigator()
class TabNavigator extends React.Component {
  render() {
    let tabNavigatorData = []
    switch (this.props.role) {
      case 'superuser':
        tabNavigatorData = TabNavigationDataSupperAdmin
        break
      case 'admin':
        tabNavigatorData = TabNavigationDataAdmin
        break
      case 'lead':
        tabNavigatorData = TabNavigationDataLead
        break
      case 'guest':
        tabNavigatorData = TabNavigationDataGuest
        break
      default:
        break
    }
    return (
      <NavigationContainer>
        <Tab.Navigator>
          {tabNavigatorData.map((item, idx) => (
            <Tab.Screen
              key={`tab_item${idx + 1}`}
              name={item.name}
              component={item.component}
              options={{
                tabBarLabel: item.name,
                tabBarIcon: () => <Icon name={item.icon} type="material-community" />,
              }}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
TabNavigator.propTypes = {
  role: PropTypes.string,
}
const mapStateToProps = (state) => ({
  role: getRole(state.auth.user),
})
export default connect(mapStateToProps, null)(TabNavigator)
