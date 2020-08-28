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
import { PropTypes } from 'prop-types'
import { getRole } from 'App/Common/Utils'
import AuthenticationActions from 'App/Stores/Authentication/Actions'
const Tab = createBottomTabNavigator()
class AppNavigator extends React.Component {
  render() {
    let tabNavigatorData = []
    switch (this.props.role) {
      case 'superuser':
        tabNavigatorData = TabNavigationDataSupperAdmin
        break
      case 'Admin':
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
    )
  }
}
AppNavigator.propTypes = {
  role: PropTypes.string,
}
const mapStateToProps = (state) => ({
  role: getRole(state.auth.user),
})
export default connect(mapStateToProps, null)(AppNavigator)
