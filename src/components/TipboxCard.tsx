import { Link } from "@/components/Link"
import { Box, Icon, Text, VStack, useToken } from "@chakra-ui/react"
import { toaster } from "src/core/theme/toaster"
import { useColorModeValue } from "src/core/theme/color-mode"
import { t } from "@lingui/core/macro"
import { useLingui } from "@lingui/react"
import ClipboardAPI from "clipboard"
// import QRCode from "qrcode.react"
import { QRCodeSVG } from "qrcode.react"
import { useEffect } from "react"
import { FaRegCopy } from "react-icons/fa"

export function TipboxCard({ title, address, url, ...rest }) {
  useLingui()

  const [qrBackgroundColor] = useToken("colors", useColorModeValue("gray.700", "whiteAlpha.900"))
  const [qrForegroundColor] = useToken("colors", useColorModeValue("white", "gray.900"))

  useEffect(() => {
    new ClipboardAPI("#test")
  }, [])

  const handleClick = () => {
    toaster.create({
      title: t`Copied!`,
      duration: 1500,
      closable: false,
    })
  }

  const styles = {
    // Chakra 2 let the (non-Chakra) `align="center"` fall through to the DOM,
    // where the HTML attribute centred everything inside, blocks included.
    // Chakra 3 strips it, so the same is spelled out in CSS.
    box: {
      textAlign: "center",
      margin: { base: "1rem", sm: "inherit" },
      padding: { base: "2rem", sm: "1.5rem" },
      shadow: "md",
      borderWidth: useColorModeValue(1, 0),
      borderRadius: "md",
      bg: useColorModeValue("white", "gray.900"),
    },
    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    caption: {
      fontWeight: useColorModeValue(600, 500),
      letterSpacing: "widest",
      color: useColorModeValue("gray.900", "gray.400"),
      marginBottom: { base: "2rem", sm: "3rem" },
    },
    linkBox: {
      marginTop: { base: "2.5rem", sm: "3.5rem" },
      color: useColorModeValue("gray.900", "gray.400"),
    },
  }

  return (
    <Box {...styles.box} {...rest}>
      <VStack>
        <Box {...styles.card}>
          <Text as="h2" textTransform="uppercase" {...styles.caption}>
            {title}
          </Text>

          <QRCodeSVG value={address} fgColor={qrForegroundColor} bgColor={qrBackgroundColor} />
          <Box {...styles.linkBox}>
            <Link href={url} isExternal passHref>
              <Text
                as="span"
                textAlign="center"
                wordBreak="break-word"
                color={useColorModeValue("gray.900", "gray.400")}
              >
                {address}{" "}
              </Text>
            </Link>

            <Icon
              as={FaRegCopy}
              w={4}
              verticalAlign="baseline"
              h={4}
              _hover={{ color: useColorModeValue("teal.500", "teal.300") }}
              id="test"
              onClick={handleClick}
              data-clipboard-text={address}
            />
          </Box>
        </Box>
      </VStack>
    </Box>
  )
}

export default TipboxCard
