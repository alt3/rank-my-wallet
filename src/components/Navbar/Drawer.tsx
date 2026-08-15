import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
} from "@chakra-ui/react"

export function Drawer({
  p = 15,
  width = "auto",
  isOpen,
  children,
  onClose,
  btnRef,
  title,
  footer,
}) {
  return (
    <Flex w={width}>
      <ChakraDrawer isOpen={isOpen} placement={"right"} onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent alignItems="center">
          <DrawerCloseButton alignSelf="end" mx={p} my={p} />
          <DrawerHeader my={p}>
            <Text as="p"> {title} </Text>
          </DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </ChakraDrawer>
    </Flex>
  )
}

export default Drawer
