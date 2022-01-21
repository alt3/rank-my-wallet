import { passwordCheckHandler } from "@storyofams/next-password-protect"

const password = process.env["AUTH_PASSWORD"]

if (password === undefined) {
  throw new Error("Required environment variable AUTH_PASSWORD is not set")
}

export default passwordCheckHandler(password, {
  // Options go here (optional)
})
