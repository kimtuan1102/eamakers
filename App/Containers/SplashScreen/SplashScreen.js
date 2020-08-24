import React from 'react'
import { Button, Text, View } from 'react-native'
import styles from './SplashScreenStyle'
import { Helpers } from 'App/Theme'
import AuthenticationActions from 'App/Stores/Authentication/Actions'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

class SplashScreen extends React.Component {
  render() {
    return (
      <View style={[Helpers.fillRowCenter, styles.container]}>
        <View style={[Helpers.center, styles.logo]}>
          {/* You will probably want to insert your logo here */}
          <Text>LOGOSplash</Text>
          <Button
            title={'Sign In'}
            onPress={() => this.props.logout()}
          />
        </View>
      </View>
    )
  }
}
SplashScreen.propTypes = {
  logout: PropTypes.func,
}
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(AuthenticationActions.logout()),
})
export default connect(
  null,
  mapDispatchToProps
)(SplashScreen)
