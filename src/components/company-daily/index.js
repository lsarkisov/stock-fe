import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import {
  companyDailyRequestAction,
  companyDailyErrorAction,
} from 'actions/company-daily'
import { StockPage, StockSpinner } from 'lib'
import Daily from 'components/daily'
import Company from 'components/company'

export default function CompanyDaily(props) {
  const dispatch = useDispatch()
  const location = useLocation()
  const { daily, company, error } = useSelector((state) => state.companyDaily)

  useEffect(() => {
    if (!daily) {
      dispatch(companyDailyRequestAction(location.pathname))
    }
  }, [daily, location, dispatch])

  useEffect(() => {
    return () => dispatch(companyDailyErrorAction(null))
  }, [dispatch])

  return (
    <StockPage>
      <Container fluid className="company-daily">
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
              <Col sm={12} md={12} lg={6}>
                <Daily data={daily} />
              </Col>
              <Col sm={12} md={12} lg={6}>
                <Company data={company} />
              </Col>
            </Row>
          </Fragment>
        )}
      </Container>
    </StockPage>
  )
}
