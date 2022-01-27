import { Box, Flex } from "@chakra-ui/react"
import { Footer, Navbar } from "@components"
import { BlitzLayout, Head } from "blitz"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "wallet-rankings"}</title>
        <link rel="icon" href="/favicon.ico" />
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
