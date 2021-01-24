import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { Line } from '@reactchartjs/react-chart.js'
import 'chartjs-plugin-zoom'
import { StockPage } from 'lib'
import { getTimeSeriesAction } from 'actions/time-series'
import { StockSpinner } from 'lib'

const borderColor = ['#39e7a6', '#33a0fc', '#febc45', '#ff4560', '#feb01a']
const labels = ['open', 'high', 'low', 'close', 'volume']

function setDataSet(all) {
  const data = {
    labels: all.labels,
    datasets: [],
  }

  all.data.forEach((item, index) => {
    data.datasets.push({
      label: labels[index],
      data: item,
      fill: false,
      borderColor: borderColor[index],
    })
  })

  return data
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  pan: {
    enabled: true,
    mode: 'xy',
  },
  zoom: {
    enabled: true,
    mode: 'xy',
  },
}

export default function TimeSeries(props) {
  const [data, setData] = useState()
  const dispatch = useDispatch()
  const location = useLocation()
  const { all } = useSelector((state) => state.timeSeries)

  useEffect(() => {
    if (!all) {
      dispatch(getTimeSeriesAction(location.pathname))
    }

    if (all && !data) {
      setData(setDataSet(all))
    }
  }, [all, location, data, setData, dispatch])

  return (
    <StockPage>
      <Container fluid className="time-series">
        {!all && <StockSpinner />}
        {all && (
          <Row>
            <Col sm={12} md={12} lg={6} className="time-series__chart">
              <Line data={data} options={options} />
            </Col>
            <Col sm={12} md={12} lg={6} className="time-series__chart">
              <ul>
                {Object.keys(all.metaData).map((item) => (
                  <li key={item}>
                    {<b>{item}:</b>} {<span>{all.metaData[item]}</span>}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        )}
      </Container>
    </StockPage>
  )
}
