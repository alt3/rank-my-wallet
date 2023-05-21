/**
 * @vitest-environment jsdom
 */
import { I18nTestingProvider, mockRouter, render } from "test/utils"
import { test } from "vitest"

import Home from "../src/pages/index"

test("renders expected h2 captions", () => {
  const { getByText } = render(<Home />, {
    router: mockRouter,
    wrapper: I18nTestingProvider,
  })

  expect(getByText(/Supported blockchains:/i)).toBeInTheDocument()

  expect(getByText(/Sponsored by:/i)).toBeInTheDocument()
})
