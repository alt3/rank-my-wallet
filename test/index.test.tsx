/**
 * @vitest-environment jsdom
 */
import { screen } from "@testing-library/react"
import { I18nTestingProvider, mockRouter, render } from "test/utils"
import { test } from "vitest"

import Home from "../src/pages/index"

test("renders expected h2 captions", () => {
  render(<Home />, {
    router: mockRouter,
    wrapper: I18nTestingProvider,
  })

  expect(screen.getByText(/Supported blockchains:/i)).toBeInTheDocument()

  expect(screen.getByText(/Sponsored by:/i)).toBeInTheDocument()
})
