import { API_HOST, API_VERSION } from 'const/api'

function callApi(endpoint, headers) {
  return fetch(`${API_HOST}${API_VERSION}${endpoint}`, headers)
    .then((response) => {
      return response.clone().json()
    })
    .then((response) => response)
    .catch((error) => error)
}

/* Time series daily
----------------------------------------*/
export const timeSeriesDaily = (name) => callApi(`/series/daily${name}`)
