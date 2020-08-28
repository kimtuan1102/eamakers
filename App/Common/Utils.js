import moment from 'moment'
export const getRole = (user) => {
  if (user) {
    if (user.is_superuser) {
      return 'superuser'
    } else if (user.is_admin) {
      return 'Admin'
    } else if (user.is_lead) {
      return 'lead'
    }
  }
  return 'guest'
}
export const formatTime = (time) => {
  let dateTime = new Date(time)
  let format = 'DD-MM-YYYY HH:mm:ss'
  return moment(dateTime).format(format)
}
