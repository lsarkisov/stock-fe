import React from 'react'
import ReactDOM from 'react-dom'
import { act, isDOMComponent } from 'react-dom/test-utils'
import { MemoryRouter, Route } from 'react-router-dom'
import { StockPage } from 'lib'

let container, testHistory, testLocation

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)

  act(() => {
    ReactDOM.render(
      <MemoryRouter initialEntries={['/some/path']}>
        <StockPage>
          <div className="child-component">some text</div>
          <div className="child-component">some text</div>
        </StockPage>
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

it('has class page', () => {
  const page = document.querySelector('.page')
  expect(isDOMComponent(page)).toBe(true)
})

it('has a logo', () => {
  const logoText = document.querySelector('a').textContent
  expect(logoText).toBe('Stock')
})

it('renders children', () => {
  const children = document.querySelectorAll('.child-component')
  expect(children.length).toBe(2)
})
