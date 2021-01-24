import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function StockHeader(props) {
  return (
    <Navbar className="navbar navbar-dark bg-dark shadow-sm logo">
      <Link to="/">Stock</Link>
    </Navbar>
  )
}
