import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Container, Row, Col, Alert, Table } from 'react-bootstrap'
import { Line } from '@reactchartjs/react-chart.js'
import 'chartjs-plugin-zoom'
import { StockPage } from 'lib'
import { getTimeSeriesAction, timeSeriesErroAction } from 'actions/time-series'
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
  const { daily, company, error } = useSelector((state) => state.timeSeries)

  useEffect(() => {
    if (!daily) {
      dispatch(getTimeSeriesAction(location.pathname))
    }

    if (daily && !data) {
      setData(setDataSet(daily))
    }
  }, [daily, location, data, setData, dispatch])

  useEffect(() => {
    return () => dispatch(timeSeriesErroAction(null))
  }, [])

  return (
    <StockPage>
      <Container fluid className="time-series">
        {!daily && !error && <StockSpinner />}
        {error && (
          <Alert variant="danger">Please check the company name.</Alert>
        )}
        {daily && (
          <Fragment>
            <Row>
              <Col>
                <h1>{company['Name']}</h1>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={12} lg={6} className="time-series__chart">
                <Line data={data} options={options} />
              </Col>
              <Col sm={12} md={12} lg={6} className="time-series__chart">
                <Table>
                  <tbody>
                    {Object.keys(company).map((key) => (
                      <tr key={key}>
                        {<td>{key}</td>}
                        {<td>{company[key]}</td>}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Fragment>
        )}
      </Container>
    </StockPage>
  )
}
