import { Box } from "@chakra-ui/react"

interface TickerStringProps {
  ticker: string
  tickerSymbol?: "₳" | "Σ"
  decimalsColor?: string
  fractionsColor?: string
}

export function TickerString({
  ticker,
  tickerSymbol,
  decimalsColor,
  fractionsColor,
}: TickerStringProps) {
  // split ticker into required parts
  const regex = /^(.+)(\.)(\d+)$/
  const matches = ticker.match(regex) //.splice(0, 1)

  const styles = {
    digits: {
      fontFamily: "Inter, monospace",
      letterSpacing: "wide",
    },
  }

  // no fractions
  if (matches === null) {
    return (
      <Box as="span">
        {tickerSymbol !== undefined && (
          <Box as="span" color={decimalsColor}>
            {tickerSymbol}{" "}
          </Box>
        )}
        <Box as="span" color={decimalsColor} {...styles.digits}>
          {ticker}
        </Box>
      </Box>
    )
  }

  // fractions
  const [matchString, decimals, decimalSeparator, fractions] = matches

  return (
    <Box as="span">
      {tickerSymbol !== undefined && (
        <Box as="span" color={decimalsColor}>
          {tickerSymbol}{" "}
        </Box>
      )}
      <Box as="span" {...styles.digits}>
        <Box as="span" color={decimalsColor}>
          {decimals}
        </Box>
        <Box as="span" color={fractionsColor}>
          {decimalSeparator}
        </Box>
        <Box as="span" color={fractionsColor}>
          {fractions}
        </Box>
      </Box>
    </Box>
  )
}

export default TickerString
