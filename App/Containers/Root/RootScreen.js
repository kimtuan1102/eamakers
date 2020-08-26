import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Helpers } from 'App/Theme'
import AppNavigator from 'App/Navigators/AppNavigator'
import AuthNavigator from 'App/Navigators/AuthNavigator'
import store from '../../Stores'


class RootScreen extends Component {

  render() {
    let state = store().store.getState()
    let token = state.auth.token
    console.log("1", token)
    return (
      <View style={Helpers.fill}>{this.props.token ? <AppNavigator /> : <AuthNavigator />}</View>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
})

export default connect(mapStateToProps)(RootScreen)
