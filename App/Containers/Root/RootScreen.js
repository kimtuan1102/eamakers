import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Helpers } from 'App/Theme'
import AppNavigator from 'App/Navigators/AppNavigator'
import AuthNavigator from 'App/Navigators/AuthNavigator'

class RootScreen extends Component {
  render() {
      return (
      <View style={Helpers.fill}>
        {this.props.token ? <AppNavigator/> : <AuthNavigator/>}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(
  mapStateToProps,
)(RootScreen)
