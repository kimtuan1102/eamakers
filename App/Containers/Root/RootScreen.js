import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Helpers } from 'App/Theme'
import AppNavigator from 'App/Navigators/AppNavigator'
import AuthNavigator from 'App/Navigators/AuthNavigator'
import { NavigationContainer } from '@react-navigation/native'

class RootScreen extends Component {
  render() {
    return (
      <NavigationContainer>
        {this.props.token ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
})

export default connect(mapStateToProps)(RootScreen)
