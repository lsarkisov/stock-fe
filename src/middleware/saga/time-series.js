import { put, call, takeEvery } from 'redux-saga/effects'
import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'
import * as services from 'services/api'

function* getTimeSeriesSuccess(data) {
  const payload = yield call(() => services.getCompanyDaily(data.payload))

  try {
    yield put({
      type: types.TIME_SERIES[SUCCESS],
      payload: {
        company: payload[0].body,
        daily: payload[1].body,
      },
    })
  } catch (error) {
    yield put({ type: types.TIME_SERIES[FAILURE], error })
  }
}

export function* getTimeSeriesRequest() {
  yield takeEvery(types.TIME_SERIES[REQUEST], getTimeSeriesSuccess)
}
