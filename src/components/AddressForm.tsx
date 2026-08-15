import { Box, Button, Field, HStack, Input } from "@chakra-ui/react"
import type { BoxProps } from "@chakra-ui/react"
import { useColorModeValue } from "src/core/theme/color-mode"
import { t } from "@lingui/core/macro"
import { useLingui } from "@lingui/react"
import { useRouter } from "next/router"
import React from "react"
import { useForm } from "react-hook-form"

interface IAddressFormProps extends BoxProps {
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
      size: "lg" as const,
      marginEnd: "0.25rem",
      bg: useColorModeValue("white", "gray.700"),
      borderColor: useColorModeValue("gray.200", "gray.700"),
      _placeholder: { color: useColorModeValue("gray.400", "gray.400") },
    },
  }

  const requiredErrorMessage = t`Please provide a wallet address`

  return (
    <Box style={{ width: "100%" }} {...rest}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field.Root invalid={errors.address ? true : false}>
          <HStack>
            <Input
              id="address"
              placeholder={placeholder}
              {...styles.input}
              {...register("address", {
                required: requiredErrorMessage,
              })}
            ></Input>
            <Button size="lg" loading={isSubmitting} type="submit" colorPalette="teal">
              {t`Go`}
            </Button>
          </HStack>
          <Field.ErrorText>
            {/* https://github.com/react-hook-form/react-hook-form/issues/8653#issuecomment-1179465376 */}
            {errors.address && <>{String(errors.address.ref && errors.address.message)}</>}
          </Field.ErrorText>
        </Field.Root>
      </form>
    </Box>
  )
}

export default AddressForm
