import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function StockSpinner(props) {
  return (
    <div className="stock-spinner">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  )
}
