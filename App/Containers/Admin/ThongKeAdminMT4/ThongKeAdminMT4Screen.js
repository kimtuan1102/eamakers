import React from 'react'
import { Text, View, Button, ActivityIndicator, ScrollView } from 'react-native'
import styles from './ThongKeAdminMT4ScreenStyle'
import { Colors, Helpers } from 'App/Theme'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AccountHistoryAction from 'App/Stores/AccountHistory/Actions'
import { Icon, ListItem } from 'react-native-elements'
import { formatTime } from 'App/Common/Utils'
import _ from 'lodash'
class ThongKeAdminMT4Screen extends React.Component {
  componentDidMount() {
    this.props.fetchAccountHistory()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.accountHistoryIsLoading ? (
          <View style={styles.container}>
            <ActivityIndicator size={'large'} color={Colors.icon} />
          </View>
        ) : (
          <ScrollView>
            {_.sortBy(this.props.accountHistory, (o) => o.open_time).map((item, i) => (
              <ListItem
                key={i}
                title={item.account.toString()}
                subtitle={`${item.symbol} ${item.amount}$ \nOpen: ${formatTime(
                  item.open_time
                )} \nClosed: ${formatTime(item.close_time)}`}
                rightTitle={`${item.status === 0 ? 'Thắng' : 'Thua'}`}
                rightTitleStyle={{ color: `${item.status === 0 ? 'green' : 'red'}` }}
                rightSubtitle={`${item.type === 0 ? 'EA' : 'Tự giao dịch'}`}
                bottomDivider
              />
            ))}
          </ScrollView>
        )}
      </View>
    )
  }
}
ThongKeAdminMT4Screen.propTypes = {
  accountHistory: PropTypes.array,
  accountHistoryIsLoading: PropTypes.bool,
  accountHistoryErrorMessage: PropTypes.string,
  fetchAccountHistory: PropTypes.func,
}
const mapStateToProps = (state) => ({
  accountHistory: state.mt4.accountHistory,
  accountHistoryIsLoading: state.mt4.accountHistoryIsLoading,
  accountHistoryErrorMessage: state.mt4.accountHistoryErrorMessage,
})
const mapDispatchToProps = (dispatch) => ({
  fetchAccountHistory: () => dispatch(AccountHistoryAction.fetchAccountHistory()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ThongKeAdminMT4Screen)
