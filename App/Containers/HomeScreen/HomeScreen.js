import React from 'react'
import { Text, View, Button } from 'react-native'
import styles from './HomeScreenStyle'
import { Helpers } from 'App/Theme'

export default class HomeScreen extends React.Component {
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
