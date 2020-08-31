import $http from 'App/Common/Axios'

function fetchTransactions() {
  return $http
    .get('/transaction/')
    .then((result) => {
      if (result.status === 200) {
        return result.data
      }
    })
    .catch(() => {
      return null
    })
}

export const transactionService = {
  fetchTransactions,
}
