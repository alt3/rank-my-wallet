/**
 * Converts a bytes array into a hex string, optionally padded so that each byte will be two
 *
 * @see {@link https://stackoverflow.com/a/34310051/9850103}
 * @param bytes - Array with bytes
 * @param pad - True to add leading zeros
 */
export const bytesToHex = (bytes: Array<number>) => {
  return Array.from(bytes, function (byte) {
    return ("0" + (byte & 0xff).toString(16)).slice(-2)
  }).join("")
}
