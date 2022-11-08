import { render } from "test/utils"

import Home from "../pages/index"

test("renders the Supported Blockchains header", () => {
  const { getByText } = render(<Home />)
  const linkElement = getByText(/Supported Blockchains/i)
  expect(linkElement).toBeInTheDocument()
})
