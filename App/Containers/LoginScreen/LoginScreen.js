import React from 'react'
import { View, Text, Image } from 'react-native'
import { Helpers, Images, Metrics, Colors } from 'App/Theme'
import Style from './LoginScreenStyle'
import AuthenticationActions from 'App/Stores/Authentication/Actions'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { Input, Button } from 'react-native-elements';

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
          style={[Helpers.fill, Helpers.column, Metrics.verticalPadding, Metrics.horizontalPadding, Style.container]}
        >
          <View style={Helpers.fill}>
            <Image style={Helpers.fullSize} source={Images.logo} resizeMode={'contain'} />
          </View>
          <View style={[Helpers.fill, Helpers.mainSpaceBetween]}>
            {this.props.loginError && <Text>{this.props.loginError}</Text>}
            {this.props.token && <Text>{this.props.token}</Text>}
            <View>
              <Input
                label="Tài khoản"
                value={this.state.user}
                placeholder="Tài khoản"
                leftIcon={{ type: 'material-community', name: 'account-circle', color: Colors.secondary}}
                onChangeText={(text) => this.handleChange('user', text)}
              />
              <Input
                label="Mật khẩu"
                value={this.state.password}
                placeholder="Mật khẩu"
                leftIcon={{ type: 'material-community', name: 'lock', color: Colors.secondary}}
                onChangeText={(text) => this.handleChange('password', text)}
                secureTextEntry={true}
              />
              <Button
                title="Đăng nhập"
                titleStyle={{textTransform: 'capitalize'}}
                onPress={() => this.props.login(this.state.user, this.state.password)}
                loading={this.props.loginLoading}
                disabled={this.props.loginLoading}
                disabledStyle={{backgroundColor: Colors.mayaBlue}}
              />
            </View>
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
