/**
 * @vitest-environment jsdom
 */

import { expect, vi, test } from "vitest"
import { render } from "test/utils"

import Home from "../src/pages/index"

// TODO re-enable after fixing https://nextjs.org/docs/messages/next-router-not-mounted
test.skip("renders the Supported Blockchains header", () => {
  const { getByText } = render(<Home />)
  const linkElement = getByText(/Supported Blockchains/i)
  expect(linkElement).toBeInTheDocument()
})
