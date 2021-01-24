import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { MemoryRouter, Route } from 'react-router-dom'
import { StockHeader } from 'lib'

let container, testHistory, testLocation

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)

  act(() => {
    ReactDOM.render(
      <MemoryRouter initialEntries={['/some/path']}>
        <StockHeader />
        <Route
          path="*"
          render={({ history, location }) => {
            testHistory = history
            testLocation = location
            return null
          }}
        />
      </MemoryRouter>,
      container,
    )
  })
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it("logo's text", () => {
  const nav = document.querySelector('a')
  expect(nav.textContent).toBe('Stock Tours')
})

it('default path', () => {
  const nav = document.querySelector('a')
  expect(testLocation.pathname).toBe('/some/path')
  nav.click()
  expect(testLocation.pathname).toBe('/')
})
