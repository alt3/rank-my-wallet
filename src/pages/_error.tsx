import { Text, useColorModeValue } from "@chakra-ui/react"
import { t } from "@lingui/macro"
import { BackHomeButton, PageHero } from "src/components"
import ExceptionLayout from "src/core/layouts/ExceptionLayout"

/**
 * This page is imported by the RootErrorFallback() function in
 * _app.tsx and then used as the ErrorBoundary FallbackComponent.
 *
 * @remarks
 * We cannot use the default layout for server-side errors because
 * it will throw `useLingui hook was used without I18nProvider`.
 */
export function Error({ statusCode, title }) {
  const styles = {
    errorMessage: {
      color: useColorModeValue("teal.500", "teal.300"),
    },
  }

  return (
    <ExceptionLayout title={t`Internal Server Error`}>
      <PageHero title={t`Internal Server Error`} marginTop={{ base: "6rem", md: "7.5rem" }} />

      <Text {...styles.errorMessage} align="center">
        {statusCode} : {title}
      </Text>

      <BackHomeButton title={t`Back to homepage`} marginTop="4rem" />
    </ExceptionLayout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
