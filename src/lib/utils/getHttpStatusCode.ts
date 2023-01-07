/**
 * Returns the HTTP Status Code name for the given Status Code number.
 *
 * @see {@link https://en.wikipedia.org/wiki/List_of_HTTP_status_codes}
 * @param statusCode - HTTP Status Code like 501
 */
export const getHttpStatusCode = function (statusCode: number): string {
  switch (statusCode) {
    case 500:
      return "Internal Server Error"
    default:
      return "Unknown, please report @rankmywallet"
  }
}
