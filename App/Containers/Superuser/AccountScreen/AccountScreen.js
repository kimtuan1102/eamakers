import React from 'react'
import { Text, View, Button } from 'react-native'
import styles from './AccountScreenStyle'
import { Helpers } from 'App/Theme'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import AuthenticationActions from 'App/Stores/Authentication/Actions'

class AccountScreen extends React.Component {
  render() {
    return (
      <View style={[Helpers.fillRowCenter, styles.container]}>
        <View style={[Helpers.center, styles.logo]}>
          {/* You will probably want to insert your logo here */}
          <Text>LOGO</Text>
          <Button
            title="M"
            onPress={() => {
              this.props.logout()
            }}
          />
        </View>
      </View>
    )
  }
}
AccountScreen.propTypes = {
  logout: PropTypes.func,
}
const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(AuthenticationActions.logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen)
