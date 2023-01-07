import { useEffect } from "react"
import NProgress from "nprogress"
// styles loaded via global theme (styles.ts)

const delay = 500

let progressBarTimeout: ReturnType<typeof setTimeout>

const clearProgressBarTimeout = () => {
  if (progressBarTimeout) {
    clearTimeout(progressBarTimeout)
  }
}

const startProgressBar = () => {
  clearProgressBarTimeout()

  progressBarTimeout = setTimeout(() => {
    NProgress.start()
  }, delay)
}

const stopProgressBar = () => {
  clearProgressBarTimeout()
  NProgress.done()
}

export const SuspenseLoader = () => {
  useEffect(() => {
    NProgress.configure({ showSpinner: false })
    startProgressBar()

    return () => {
      stopProgressBar()
    }
  })

  return <></>
}

export default SuspenseLoader
