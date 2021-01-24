import { put, call, takeEvery } from 'redux-saga/effects'
import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'
import * as services from 'services/api'

function* getCompanyDailySuccess(data) {
  const payload = yield call(() => services.getCompanyDaily(data.payload))

  try {
    yield put({
      type: types.COMPANY_DAILY[SUCCESS],
      payload: {
        company: payload[0].body,
        daily: payload[1].body,
      },
    })
  } catch (error) {
    yield put({ type: types.COMPANY_DAILY[FAILURE], error })
  }
}

export function* getCompanyDailyRequest() {
  yield takeEvery(types.COMPANY_DAILY[REQUEST], getCompanyDailySuccess)
}
