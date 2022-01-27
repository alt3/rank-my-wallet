import { AddressError } from "@components"

function Error({ statusCode, address = undefined }) {
  return (
    <>
      <p>
        {statusCode ? `An error ${statusCode} occurred on server` : "An error occurred on client"}
      </p>
      <AddressError statusCode={statusCode} title="Not implemented" parsedAddress={address} />
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404

  return { statusCode }
}

export default Error
