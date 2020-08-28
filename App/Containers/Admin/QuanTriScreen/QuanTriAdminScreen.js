import React from 'react'
import { View, ScrollView, ActivityIndicator } from 'react-native'
import styles from './QuanTriAdminScreenStyle'
import { Colors, Helpers } from 'App/Theme'
import { ListItem, Icon, Image, Text, Header } from 'react-native-elements'
import AccountConfigAction from 'App/Stores/AccountConfig/Actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class QuanTriAdminScreen extends React.Component {
  componentDidMount() {
    this.props.fetchAccountConfig()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.accountConfigIsLoading ? (
          <View style={styles.container}>
            <ActivityIndicator size={'large'} color={Colors.icon} />
          </View>
        ) : (
          <ScrollView>
            {this.props.accountConfig.map((item, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: require('../../../Assets/Images/Drawer/user.png') }}
                title={item.account_details.name}
                subtitle={item.account_details.id.toString()}
                rightTitle={`${item.percent_copy.toString()} %`}
                bottomDivider
                chevron={
                  <Icon name="chevron-right" type="material-community" color={Colors.icon} />
                }
                rightIcon={
                  item.has_error ? (
                    <Icon name="alert-circle" type="material-community" color={'red'} />
                  ) : (
                    <Icon name="information" type="material-community" color={Colors.success} />
                  )
                }
              />
            ))}
          </ScrollView>
        )}
      </View>
    )
  }
}
QuanTriAdminScreen.propTypes = {
  accountConfig: PropTypes.array,
  accountConfigIsLoading: PropTypes.bool,
  accountConfigErrorMessage: PropTypes.string,
  fetchAccountConfig: PropTypes.func,
}
const mapStateToProps = (state) => ({
  accountConfig: state.accountConf.accountConfig,
  accountConfigIsLoading: state.accountConf.accountConfigIsLoading,
  accountConfigErrorMessage: state.accountConf.accountConfigErrorMessage,
})
const mapDispatchToProps = (dispatch) => ({
  fetchAccountConfig: () => dispatch(AccountConfigAction.fetchAccountConfig()),
})
export default connect(mapStateToProps, mapDispatchToProps)(QuanTriAdminScreen)
