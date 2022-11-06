import Script from "next/script"

/**
 * Insert Google Analytics script
 *
 * @see {@link https://frontend-digest.com/using-nextjs-with-google-analytics-and-typescript-620ba2359dea}
 */
export function GtagScript() {
  const GA_TRACKING_ID = "G-X0651PNQQN"

  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${GA_TRACKING_ID}');
  `}
      </Script>
    </>
  )
}

export default GtagScript
