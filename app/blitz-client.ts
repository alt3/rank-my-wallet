import { AuthClientPlugin } from "@blitzjs/auth"
import { setupBlitzClient } from "@blitzjs/next"
import { BlitzRpcPlugin } from "@blitzjs/rpc"

// @todo remove when RPC and Auth are decoupled https://github.com/blitz-js/blitz/pull/3943
export const authConfig = {
  cookiePrefix: "blitz-next2",
}

export const { withBlitz } = setupBlitzClient({
  plugins: [AuthClientPlugin(authConfig), BlitzRpcPlugin({})],
})
