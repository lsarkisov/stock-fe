import * as types from 'const/requests'
import { REQUEST } from 'const/actions'

export const getTimeSeriesAction = (name) => ({
  type: types.TIME_SERIES[REQUEST],
  payload: name,
})
