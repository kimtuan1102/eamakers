import React from 'react'
import { View, ScrollView, ActivityIndicator } from 'react-native'
import styles from './QuanTriScreenStyle'
import { Colors, Helpers } from 'App/Theme'
import { ListItem, Icon, Image, Text, Header } from 'react-native-elements'
import AccountConfigAction from 'App/Stores/AccountConfig/Actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
]
class QuanTriScreen extends React.Component {
  componentDidMount() {
    this.props.fetchAccountConfig()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
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
QuanTriScreen.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(QuanTriScreen)
