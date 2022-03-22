import { Box, Flex } from "@chakra-ui/react"
import { Footer, Navbar } from "@components"
import { BlitzLayout, Head, Script } from "blitz"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "wallet-rankings"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X0651PNQQN" />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-X0651PNQQN');
        `}
      </Script>

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
