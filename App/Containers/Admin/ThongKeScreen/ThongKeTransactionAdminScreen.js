import React from 'react'
import { Text, View, Button } from 'react-native'
import styles from './ThongKeTransactionAdminScreenStyle'
import { Helpers } from 'App/Theme'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TransactionAction from 'App/Stores/Transaction/Actions'
class ThongKeTransactionAdminScreen extends React.Component {
  render() {
    return (
      <View style={[Helpers.fillRowCenter, styles.container]}>
        <View style={[Helpers.center, styles.logo]}>
          {/* You will probably want to insert your logo here */}
          <Text>LOGO</Text>
          <Button
            title="M"
            onPress={() => {
              this.props.navigation.toggleDrawer()
            }}
          />
        </View>
      </View>
    )
  }
}
ThongKeTransactionAdminScreen.propTypes = {
  transaction: PropTypes.array,
  transactionIsLoading: PropTypes.bool,
  transactionErrorMessage: PropTypes.string,
  fetchTransaction: PropTypes.func,
}
const mapStateToProps = (state) => ({
  transaction: state.trans.transaction,
  transactionIsLoading: state.trans.transactionIsLoading,
  transactionErrorMessage: state.trans.transactionErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  fetchTransaction: () => dispatch(TransactionAction.fetchTransaction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ThongKeTransactionAdminScreen)
