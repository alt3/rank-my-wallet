import { BlitzLayout } from "@blitzjs/next"
import Head from "next/head"
import { ContentContainer } from "src/components"

const ExceptionLayout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "wallet-rankings"}</title>
      </Head>

      <ContentContainer>
        <main>{children}</main>
      </ContentContainer>
    </>
  )
}

export default ExceptionLayout
