import { useForm } from "react-hook-form"
import React from "react"
import { FormErrorMessage, HStack, FormControl, Input, Button } from "@chakra-ui/react"
import { validateAddress } from "app/lib/validateAddress"

export function AddressForm() {
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
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve(values)
      }, 3000)
    })
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
              validate: {
                checkAddress: (v) => validateAddress(v),
              },
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
