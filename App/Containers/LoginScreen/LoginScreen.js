import React from 'react'
import { TextInput, Button, View, Text, Image } from 'react-native'
import { Helpers, Images, Metrics } from 'App/Theme'
import AuthenticationActions from 'App/Stores/Authentication/Actions'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'


class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: 'tuantk',
      password: 'Matkhau1@',
    }
  }

  handleChange(name, text) {
    return this.setState({
      [name]: text,
    })
  }
    render() {
      return (
        <View
          style={[Helpers.fill, Helpers.column, Metrics.verticalPadding, Metrics.horizontalPadding]}
        >
          <View style={Helpers.fill}>
            <Image style={Helpers.fullSize} source={Images.logo} resizeMode={'contain'} />
          </View>
          <View style={[Helpers.fill, Helpers.mainSpaceBetween]}>
            {this.props.loginError && <Text>{this.props.loginError}</Text>}
            {this.props.token && <Text>{this.props.token}</Text>}
            <View>
              <TextInput
                textContentType={'emailAddress'}
                value={this.state.user}
                onChangeText={(text) => this.handleChange('user', text)}
                style={[Metrics.verticalPadding, Metrics.verticalMargin, { borderWidth: 1 }]}
              />
              <TextInput
                secureTextEntry
                style={{ borderWidth: 1 }}
                value={this.state.password}
                onChangeText={(text) => this.handleChange('password', text)}
                style={[Metrics.verticalPadding, Metrics.verticalMargin, { borderWidth: 1 }]}
              />
            </View>
            <Button
              title={'Sign In'}
              onPress={() => this.props.login(this.state.user, this.state.password)}
            />
          </View>
        </View>
      )
    }
}
LoginScreen.propTypes = {
  token: PropTypes.string,
  loginLoading: PropTypes.bool,
  loginError: PropTypes.string,
  login: PropTypes.func,
}
const mapStateToProps = (state) => ({
  token: state.auth.token,
  loginLoading: state.auth.loginLoading,
  loginError: state.auth.loginError,
})

const mapDispatchToProps = (dispatch) => ({
  login: (user, password) => dispatch(AuthenticationActions.login(user, password)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
