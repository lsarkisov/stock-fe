import { all } from 'redux-saga/effects'
import { getTimeSeriesRequest } from 'middleware/saga/time-series'

export default function* rootSaga() {
  yield all([getTimeSeriesRequest()])
}
