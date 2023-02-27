import Head from "next/head"
import { useRouter } from "next/router"

interface Props {
  title: string
  description?: string
  keywords?: string
}

export function MetaTags({ title, description, keywords }: Props) {
  const { asPath } = useRouter()
  const host = process.env["NEXT_PUBLIC_SITE_URL"]
  const url = host + asPath

  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {title && <meta property="og:title" content={title} key="title" />}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      {description && <meta property="og:description" content={description} />}

      <meta name="twitter:content" content="summary" />
      <meta name="twitter:site" content="@RankMyWallet" />
    </Head>
  )
}

export default MetaTags
