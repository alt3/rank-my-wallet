import { useForm } from "react-hook-form"
import React from "react"
import { useRouter } from "blitz"
import { FormErrorMessage, HStack, FormControl, Input, Button } from "@chakra-ui/react"

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

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <FormControl isInvalid={errors.address}>
        <HStack>
          <Input
            id="address"
            placeholder="Wallet address"
            size="lg"
            {...register("address", {
              required: "Please provide a wallet address",
            })}
          ></Input>
          <Button size="lg" isLoading={isSubmitting} type="submit">
            Go
          </Button>
        </HStack>
        <FormErrorMessage>{errors.address && errors.address.message}</FormErrorMessage>
      </FormControl>
    </form>
  )
}

export default AddressForm
