import * as types from 'const/requests'
import { REQUEST, SUCCESS, FAILURE } from 'const/actions'

const metaData = 'Meta Data'
const timeSeriesDaily = 'Time Series (Daily)'

function format(json) {
  const labels = []

  const open = []
  const high = []
  const low = []
  const close = []
  const volume = []

  Object.entries(json[timeSeriesDaily]).forEach((item, v) => {
    labels.push(item[0])
    open.push(item[1]['1. open'])
    high.push(item[1]['2. high'])
    low.push(item[1]['3. low'])
    close.push(item[1]['4. close'])
    volume.push(item[1]['5. volume'])
  })

  return {
    labels,
    data: [open, high, low, close],
    volume,
    metaData: json[metaData],
  }
}

const initState = {
  all: null,
}

const timeSeries = (state = initState, action) => {
  switch (action.type) {
    case types.TIME_SERIES[REQUEST]:
      return {
        ...state,
        ...{
          request: true,
          all: null,
        },
      }
    case types.TIME_SERIES[SUCCESS]:
      const json = format(action.payload)
      return {
        ...state,
        ...{
          all: json,
          request: false,
        },
      }
    case types.TIME_SERIES[FAILURE]:
      return {
        ...state,
        ...{
          request: false,
          all: null,
        },
      }

    default:
      return state
  }
}

export default timeSeries
