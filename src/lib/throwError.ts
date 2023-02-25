/**
 * @throws A Next.js compatible error object
 */
export const throwError = (message: string, statusCode?: number): object => {
  throw {
    message: message,
    statusCode: statusCode || 500,
  }
}
