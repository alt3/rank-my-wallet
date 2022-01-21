import {
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  useColorModeValue,
} from "@chakra-ui/react"
import { useRouter } from "blitz"
import React from "react"
import { useForm } from "react-hook-form"

export function AddressForm() {
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
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <FormControl isInvalid={errors.address}>
        <HStack>
          <Input
            id="address"
            placeholder="Wallet address"
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
  )
}

export default AddressForm
