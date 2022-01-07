import { Head, BlitzLayout } from "blitz"
import { Navbar } from "@/components/navbar"
import { useColorModeValue, Box } from "@chakra-ui/react"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <Box>
      <Head>
        <title>{title || "wallet-rankings"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {children}
    </Box>
  )
}

export default Layout
