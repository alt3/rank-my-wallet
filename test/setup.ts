/**
 * This is the jest 'setupFilesAfterEnv' setup file
 * It's a good place to set globals, add global before/after hooks, etc
 */
import "@testing-library/jest-dom"
import "@testing-library/jest-dom/vitest"
import { cleanup } from "@testing-library/react"
import { vi } from "vitest"

// prevent error: NextRouter was not mounted.
const useRouter = vi.spyOn(require("next/router"), "useRouter")
useRouter.mockImplementation(() => ({
  pathname: "/",
}))

afterEach(() => {
  cleanup()
})

// so TS doesn't complain
export {}
