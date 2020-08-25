import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  avatar: {
    borderRadius: 20,
    height: 40,
    width: 40,
  },
  avatarContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 20,
    marginBottom: 10,
  },
  divider: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    margin: 15,
    opacity: 0.2,
  },
  menuLabelFlex: {
    display: 'flex',
    flexDirection: 'row',
  },
  menuTitle: {
    color: '#fff',
    marginLeft: 10,
  },
  userName: {
    color: '#fff',
    fontSize: 18,
  },
})
