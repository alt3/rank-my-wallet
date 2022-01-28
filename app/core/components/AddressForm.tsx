import {
  Button,
  Box,
  ChakraProps,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  useColorModeValue,
} from "@chakra-ui/react"
import { useRouter } from "blitz"
import React from "react"
import { useForm } from "react-hook-form"

interface IAddressFormProps extends ChakraProps {
  placeholder?: string
}

export function AddressForm({ placeholder, ...rest }: IAddressFormProps) {
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

  return (
    <Box style={{ width: "100%" }} {...rest}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.address}>
          <HStack>
            <Input
              id="address"
              placeholder={placeholder}
              {...styles.input}
              {...register("address", {
                required: "Please provide a wallet address",
              })}
            ></Input>
            <Button size="lg" isLoading={isSubmitting} type="submit" colorScheme="teal">
              Go
            </Button>
          </HStack>
          <FormErrorMessage>{errors.address && errors.address.message}</FormErrorMessage>
        </FormControl>
      </form>
    </Box>
  )
}

export default AddressForm
