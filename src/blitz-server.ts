import { setupBlitzServer } from "@blitzjs/next"
import { BlitzLogger } from "blitz"

export const { gSSP, gSP, api } = setupBlitzServer({
  plugins: [],
  logger: BlitzLogger({}),
})
