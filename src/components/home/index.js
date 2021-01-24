import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { StockPage } from 'lib'

export default function Home(props) {
  return (
    <StockPage>
      <Container className="home">
        <h1>Home page</h1>
        <p>
          <Link to="/aapl">Click here</Link>
        </p>
      </Container>
    </StockPage>
  )
}
