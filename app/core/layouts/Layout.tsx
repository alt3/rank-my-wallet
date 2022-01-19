import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { Box } from "@chakra-ui/react"
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
