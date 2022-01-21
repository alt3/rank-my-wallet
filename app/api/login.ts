import { loginHandler } from "@storyofams/next-password-protect"

const password = process.env["AUTH_PASSWORD"]

if (password === undefined) {
  throw new Error("Required environment variable AUTH_PASSWORD is not set")
}

export default loginHandler(password, {
  // Options go here (optional)
  cookieMaxAge: 60 * 60000, // in minutes (multiplied to milliseconds)
})
