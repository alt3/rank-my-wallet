import { Button } from "@chakra-ui/button"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { Box, HStack } from "@chakra-ui/layout"
import { ChakraProps } from "@chakra-ui/system"
import { t } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import { useRouter } from "next/router"
import React from "react"
import { useForm } from "react-hook-form"

interface IAddressFormProps extends ChakraProps {
  placeholder?: string
}

export function AddressForm({ placeholder, ...rest }: IAddressFormProps) {
  useLingui()

  const router = useRouter()

  const {
    handleSubmit,
    register,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm()

  React.useEffect(() => {
    setFocus("address")
  }, [setFocus])

  function onSubmit(values) {
    if (router.query.address === values.address) {
      return null // Prevent Invariant Error: attempted to hard navigate to the same URL
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push("/" + values.address)
  }

  const styles = {
    input: {
      size: "lg",
      marginRight: "0.25rem",
      bg: useColorModeValue("white", "gray.700"),
      borderColor: useColorModeValue("gray.200", "gray.700"),
      _placeholder: { color: useColorModeValue("gray.400", "gray.400") },
    },
  }

  const requiredErrorMessage = t`Please provide a wallet address`

  return (
    <Box style={{ width: "100%" }} {...rest}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.address ? true : false}>
          <HStack>
            <Input
              id="address"
              placeholder={placeholder}
              {...styles.input}
              {...register("address", {
                required: requiredErrorMessage,
              })}
            ></Input>
            <Button size="lg" isLoading={isSubmitting} type="submit" colorScheme="teal">
              {t`Go`}
            </Button>
          </HStack>
          <FormErrorMessage>
            {/* https://github.com/react-hook-form/react-hook-form/issues/8653#issuecomment-1179465376 */}
            {String(errors.address?.ref && errors.address.message)}
          </FormErrorMessage>
        </FormControl>
      </form>
    </Box>
  )
}

export default AddressForm
