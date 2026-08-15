/**
 * Vitest `setupFiles` entry point.
 * A good place to set globals, add global before/after hooks, etc.
 */
import { i18n } from "@lingui/core"
import "@testing-library/jest-dom"
import "@testing-library/jest-dom/vitest"
import { cleanup } from "@testing-library/react"
import { vi } from "vitest"

// Lingui v5 throws from `i18n._()` when no locale is active, where v4 only
// warned. Activate with an empty catalog so lookups fall back to the source
// message, which is what the assertions here expect.
i18n.loadAndActivate({ locale: "en-us", messages: {} })

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
