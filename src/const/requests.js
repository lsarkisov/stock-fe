import { REQUEST, SUCCESS, FAILURE } from 'const/actions'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

/* People
----------------------------------------*/
export const TIME_SERIES = createRequestTypes('TIME_SERIES')
