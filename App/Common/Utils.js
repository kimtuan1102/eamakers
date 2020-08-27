export const getRole = (user) => {
  if (user) {
    if (user.is_superuser) {
      return 'superuser'
    } else if (user.is_admin) {
      return 'admin'
    } else if (user.is_lead) {
      return 'lead'
    }
  }
  return 'guest'
}
