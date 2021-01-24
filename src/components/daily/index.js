import React, { useEffect, useState } from 'react'
import { Line } from '@reactchartjs/react-chart.js'
import 'chartjs-plugin-zoom'

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

export default function Daily(props) {
  const [data, setData] = useState()

  useEffect(() => {
    if (props.data && !data) {
      setData(setDataSet(props.data))
    }
  }, [props.data, data, setData])

  return (
    <div className="daily">
      <Line data={data} options={options} />
    </div>
  )
}
