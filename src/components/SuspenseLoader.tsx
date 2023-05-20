import { useEffect } from "react"
import NProgress from "nprogress"
import { useLingui } from "@lingui/react"
import { getRTL } from "src/translations/utils"
// styles loaded via global theme (styles.ts)

const delay = 500

let progressBarTimeout: ReturnType<typeof setTimeout>

const clearProgressBarTimeout = () => {
  if (progressBarTimeout) {
    clearTimeout(progressBarTimeout)
  }
}

const startProgressBar = (rtlDirection) => {
  clearProgressBarTimeout()

  progressBarTimeout = setTimeout(() => {
    NProgress.start()

    // set right-to-left class
    const element = document.getElementById("nprogress")
    if (element) {
      element.className = rtlDirection === "rtl" ? "rtl" : "ltr"
    }
  }, delay)
}

const stopProgressBar = () => {
  clearProgressBarTimeout()
  NProgress.done()
}

export const SuspenseLoader = () => {
  const { i18n } = useLingui()
  const rtl = getRTL(i18n.locale)

  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
    })
    startProgressBar(rtl.direction)

    return () => {
      stopProgressBar()
    }
  })

  return <></>
}

export default SuspenseLoader
