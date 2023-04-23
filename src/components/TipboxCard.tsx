import { Link } from "@/components/Link"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { Icon } from "@chakra-ui/icon"
import { Box, Text, VStack } from "@chakra-ui/layout"
import { useToken } from "@chakra-ui/system"
import { useToast } from "@chakra-ui/toast"
import { t } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import ClipboardAPI from "clipboard"
import QRCode from "qrcode.react"
import { useEffect } from "react"
import { FaRegCopy } from "react-icons/fa"

export function TipboxCard({ title, address, url, ...rest }) {
  useLingui()

  const qrBackgroundColor = useToken("colors", useColorModeValue("gray.700", "whiteAlpha.900"))
  const qrForegroundColor = useToken("colors", useColorModeValue("white", "gray.900"))

  useEffect(() => {
    new ClipboardAPI("#test")
  }, [])

  const toast = useToast()

  const handleClick = () => {
    toast({
      title: t`Copied!`,
      duration: 1500,
      position: "top-right",
      isClosable: false,
    })
  }

  const styles = {
    box: {
      align: "center",
      justifyContent: "center",
      margin: { base: "1rem", sm: "inherit" },
      padding: { base: "2rem", sm: "1.5rem" },
      shadow: "md",
      borderWidth: useColorModeValue(1, 0),
      borderRadius: "md",
      bg: useColorModeValue("white", "gray.900"),
    },
    card: {
      align: "center",
      justifyContent: "center",
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

          <QRCode value={address} fgColor={qrForegroundColor} bgColor={qrBackgroundColor} />
          <Box {...styles.linkBox}>
            <Link href={url} isExternal passHref>
              <Text
                as="span"
                align="center"
                wordBreak="break-word"
                color={useColorModeValue("gray.900", "gray.400")}
              >
                {address}{" "}
              </Text>
            </Link>

            <Icon
              as={FaRegCopy}
              w={4}
              h={4}
              // marginLeft="1"
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
