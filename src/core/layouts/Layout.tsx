import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { BlitzLayout } from "@blitzjs/next"
import { Box, Flex } from "@chakra-ui/layout"
import Head from "next/head"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "wallet-rankings"}</title>
      </Head>

      {/* This flex keeps the footer nicely at bottom. See // https://stackoverflow.com/a/66565163/9850103 */}
      <Flex display="flex" minHeight="100vh" direction="column" justifyContent="space-between">
        <Navbar />
        <Box>
          <main>{children}</main>
        </Box>

        <Footer />
      </Flex>
    </>
  )
}

export default Layout
