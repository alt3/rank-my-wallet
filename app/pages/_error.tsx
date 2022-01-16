import { AddressError } from "@/components/errors/AddressError"

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
  // handle server side address errors (only those will have the `parsedAddress` prop)
  if (err.parsedAddress) {
    res.statusCode = 501 // set response header

    return {
      statusCode: 501,
      address: err.parsedAddress,
    }
  }

  // default blitz error handling
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404

  return { statusCode }
}

export default Error
