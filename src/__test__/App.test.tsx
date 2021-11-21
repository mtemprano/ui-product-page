import React from "react"
import { Provider } from "react-redux"
import { render } from "@testing-library/react"
import App from "../App"
import store from "../store"

describe("Integration tests", () => {
  let renderedApp: any

  beforeEach(() => {
    renderedApp = render(
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>,
    )
  })

  test('should display 5 items per page', async () => {
    const { findByText } = renderedApp;
    const firstElement = await findByText("iPhone 6S Oro")

    expect(firstElement).toBeDefined();
  });
})
