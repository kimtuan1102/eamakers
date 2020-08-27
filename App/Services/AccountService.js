import $http from 'App/Common/Axios'

function fetchAccountConfig() {
  return $http
    .get('account-config/')
    .then((response) => {
      if (response.status === 200) {
        return response.data
      }
    })
    .catch((e) => {
      return null
    })
}

export const accountService = {
  fetchAccountConfig,
}
