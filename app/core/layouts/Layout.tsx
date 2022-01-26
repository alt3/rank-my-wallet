import { Box } from "@chakra-ui/react"
import { Footer, Navbar } from "@components"
import { BlitzLayout, Head } from "blitz"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "wallet-rankings"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Box>
        <main>{children}</main>
      </Box>

      <Footer />
    </>
  )
}

export default Layout
