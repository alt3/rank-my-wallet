import { CloseButton, Drawer as ChakraDrawer, Flex, Portal, Text } from "@chakra-ui/react"

/**
 * Chakra 3 renamed the Drawer parts to a namespace and changed the open/close
 * contract: `isOpen`/`onClose` became `open`/`onOpenChange`, and the content
 * now sits inside a Portal + Positioner. This wrapper keeps the old prop names
 * so the call sites did not have to change.
 */
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
      <ChakraDrawer.Root
        open={isOpen}
        placement="end"
        onOpenChange={(e) => {
          if (!e.open) {
            onClose?.()
          }
        }}
        finalFocusEl={btnRef ? () => btnRef.current : undefined}
      >
        <Portal>
          <ChakraDrawer.Backdrop />
          <ChakraDrawer.Positioner>
            <ChakraDrawer.Content alignItems="center">
              <ChakraDrawer.CloseTrigger asChild>
                <CloseButton alignSelf="end" mx={p} my={p} />
              </ChakraDrawer.CloseTrigger>
              <ChakraDrawer.Header my={p}>
                <Text as="p"> {title} </Text>
              </ChakraDrawer.Header>
              <ChakraDrawer.Body>{children}</ChakraDrawer.Body>
              <ChakraDrawer.Footer>{footer}</ChakraDrawer.Footer>
            </ChakraDrawer.Content>
          </ChakraDrawer.Positioner>
        </Portal>
      </ChakraDrawer.Root>
    </Flex>
  )
}

export default Drawer
