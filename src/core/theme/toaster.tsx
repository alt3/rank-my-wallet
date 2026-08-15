"use client"

import { Portal, Stack, Toast, Toaster as ChakraToaster, createToaster } from "@chakra-ui/react"

/**
 * Chakra 3 replaced `useToast`/`createStandaloneToast` with a standalone
 * toaster store plus a `<Toaster />` renderer. The store lives outside React,
 * so `toaster.create(...)` can be called from anywhere; the renderer is mounted
 * once in _app.tsx.
 */
export const toaster = createToaster({
  placement: "top-end",
  pauseOnPageIdle: true,
})

export const Toaster = () => (
  <Portal>
    <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
      {(toast) => (
        <Toast.Root width={{ md: "sm" }}>
          <Stack gap="1" flex="1" maxWidth="100%">
            {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
            {toast.description && <Toast.Description>{toast.description}</Toast.Description>}
          </Stack>
          {toast.closable && <Toast.CloseTrigger />}
        </Toast.Root>
      )}
    </ChakraToaster>
  </Portal>
)

export default Toaster
