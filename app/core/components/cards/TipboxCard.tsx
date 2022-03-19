import { Box, Icon, Text, useColorModeValue, useToast, useToken, VStack } from "@chakra-ui/react"
import { Link } from "@components"
import ClipboardAPI from "clipboard"
import QRCode from "qrcode.react"
import { useEffect } from "react"
import { FaRegCopy } from "react-icons/fa"

export function TipboxCard({ title, address, url, linkTitle, ...rest }) {
  const qrBackgroundColor = useToken("colors", useColorModeValue("gray.700", "whiteAlpha.900"))
  const qrForegroundColor = useToken("colors", useColorModeValue("white", "gray.900"))

  useEffect(() => {
    new ClipboardAPI("#test")
  }, [])

  const toast = useToast()

  const handleClick = () => {
    toast({
      title: "Copied!",
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
      color: useColorModeValue("teal.500", "teal.300"),
      marginBottom: { base: "2rem", sm: "3rem" },
    },
    linkBox: {
      marginTop: { base: "2.5rem", sm: "3.5rem" },
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
            <Link href={url} title={linkTitle} isExternal passHref>
              <Text
                as="span"
                align="center"
                wordBreak="break-word"
                color={useColorModeValue("gray.900", "whiteAlpha.900")}
              >
                {address}{" "}
              </Text>
            </Link>

            <Icon
              as={FaRegCopy}
              w={4}
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
