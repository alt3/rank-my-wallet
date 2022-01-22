import basicAuthMiddleware from "nextjs-basic-auth-middleware"

export const basicAuth = async (req, res) => {
  try {
    await basicAuthMiddleware(req, res, {
      users: [{ name: "ergo", password: "101" }],
    })
  } catch (e) {
    console.log(e)
  }
}

export default basicAuth
