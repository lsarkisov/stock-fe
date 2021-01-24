import React from 'react'
import { Table } from 'react-bootstrap'

export default function Company(props) {
  const { data } = props

  return (
    <Table>
      <tbody>
        {Object.keys(data).map((key) => (
          <tr key={key}>
            {<td>{key}</td>}
            {<td>{data[key]}</td>}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
