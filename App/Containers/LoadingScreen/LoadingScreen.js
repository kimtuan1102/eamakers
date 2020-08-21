import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from 'App/Containers/LoadingScreen/LoadingScreenStyle'
import { Helpers, Images } from 'App/Theme'

export default class LoadingScreen extends React.Component {
    render() {
        return (
            <View style={[Helpers.fillRowCenter, styles.container]}>
                <View style={[Helpers.center, styles.logo]}>
                  <Image style={Helpers.fullSize} source={Images.logo} resizeMode={'contain'} />
                </View>
            </View>
        )
    }
}
