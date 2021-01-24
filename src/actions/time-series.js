import * as types from 'const/requests'
import { REQUEST, FAILURE } from 'const/actions'

export const getTimeSeriesAction = (name) => ({
  type: types.TIME_SERIES[REQUEST],
  payload: name,
})

export const timeSeriesErroAction = (error) => ({
  type: types.TIME_SERIES[FAILURE],
  error,
})
