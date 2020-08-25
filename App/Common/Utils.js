import headerLeftMenu from 'App/Components/HeaderLeftMenu'

const convertToRouteConfigMap = (array) => {
  const initialValue = {}
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item['name']]: {
        screen: item.component,
        navigationOptions: ({ navigation }) => ({
          headerLeft: item.headerLeft || headerLeftMenu(navigation),
          headerTitleStyle: item.headerTitleStyle,
        }),
      },
    }
  }, initialValue)
}
export default convertToRouteConfigMap
