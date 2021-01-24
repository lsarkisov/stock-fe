import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { StockPage } from 'lib'

export default function NoMatch(props) {
  let location = useLocation()

  return (
    <StockPage>
      <Container fluid className="time-series">
        <h2>
          <Link to="/">Home page</Link>
        </h2>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </Container>
    </StockPage>
  )
}
