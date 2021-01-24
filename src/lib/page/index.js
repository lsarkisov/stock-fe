import React from 'react'
import { Container } from 'react-bootstrap'
import { StockHeader } from 'lib'

export default function StockPage(props) {
  return (
    <Container fluid className="p-0 page">
      <StockHeader />
      {props.children}
    </Container>
  )
}
