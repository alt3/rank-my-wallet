import { UnexpectedError } from "app/core/errors"
import { getHttpStatusCode } from "app/lib/utils"

function Error({ statusCode, err }) {
  const side = statusCode ? "Server" : "Client"

  let statusCodeName = ""
  if (statusCode) {
    statusCodeName = getHttpStatusCode(statusCode)
  }

  if (err) {
    err = err.toString()
  }

  return (
    <UnexpectedError
      side={side}
      statusCode={statusCode}
      statusCodeName={statusCodeName}
      message={err}
    />
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404

  return { statusCode, err }
}

export default Error
