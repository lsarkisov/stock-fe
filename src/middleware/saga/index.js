import { all } from 'redux-saga/effects'
import { getCompanyDailyRequest } from 'middleware/saga/company-daily'

export default function* rootSaga() {
  yield all([getCompanyDailyRequest()])
}
