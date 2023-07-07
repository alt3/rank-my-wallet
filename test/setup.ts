/**
 * This is the jest 'setupFilesAfterEnv' setup file
 * It's a good place to set globals, add global before/after hooks, etc
 */
import matchers from "@testing-library/jest-dom/matchers"
import { cleanup } from "@testing-library/react"
import { expect, vi } from "vitest"

// prevent error: NextRouter was not mounted.
const useRouter = vi.spyOn(require("next/router"), "useRouter")
useRouter.mockImplementation(() => ({
  pathname: "/",
}))

// prevent error: Invalid Chai property: toBeInTheDocument
// https://marabesi.com/2023/01/14/configuring-vitest-and-testing-library.html
expect.extend(matchers)

afterEach(() => {
  cleanup()
})

// so TS doesn't complain
export {}
