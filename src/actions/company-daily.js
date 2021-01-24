import * as types from 'const/requests'
import { REQUEST, FAILURE } from 'const/actions'

export const companyDailyRequestAction = (name) => ({
  type: types.COMPANY_DAILY[REQUEST],
  payload: name,
})

export const companyDailyErrorAction = (error) => ({
  type: types.COMPANY_DAILY[FAILURE],
  error,
})
