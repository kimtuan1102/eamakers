import $http from 'App/Common/Axios'

function fetchAccountHistory() {
  return $http
    .get('account-history/')
    .then((response) => {
      if (response.status === 200) {
        return response.data
      }
    })
    .catch((e) => {
      return null
    })
}

export const mt4Service = {
  fetchAccountHistory,
}
