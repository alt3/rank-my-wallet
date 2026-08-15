import { DataGridCellTypeDecimal } from "@/components/DataGrid/DataGridCellTypeDecimal"
import { DataGridCellTypeBinary } from "@/components/DataGrid/DatagridCellTypeBinary"
import { DataGridCellTypeBit } from "@/components/DataGrid/DatagridCellTypeBit"
import { Table, Text } from "@chakra-ui/react"
import { useColorModeValue } from "src/core/theme/color-mode"
import { Trans } from "@lingui/react/macro"
import { useLingui } from "@lingui/react"
import nextId from "react-id-generator"
import { bitsToByte } from "src/lib/bits/bitsToByte"
import { getRTL } from "src/translations/utils"

interface BitsTableProps {
  caption: string
  bits: Array<number | null>
  sumLabel?: string
}

export function BitsTableDesktop({ caption, bits, sumLabel }: BitsTableProps) {
  const { i18n } = useLingui()
  const rtl = getRTL(i18n.locale)

  const reversedBits = [...bits].reverse() // create reversed clone so we can render top-down bits

  let binaryCounter = 256 // we will divide by two to generate the static binary cell headers

  // add nullified trailing bits to get to 8-bit format
  if (reversedBits.length !== 8) {
    for (let i = 0; i <= 8 - reversedBits.length; i++) {
      bits.push(null)
      i++
    }
  }

  const styles = {
    caption: {
      color: useColorModeValue("teal.500", "teal.300"),
    },
    table: {
      marginBottom: "3rem",
    },
    td: {
      textAlign: "center" as const,
    },
    tdField: {
      padding: 0,
      margin: 0,
    },
    tdSum: {
      fontWeight: "extrabold",
      color: useColorModeValue("teal.500", "teal.300"),
      marginEnd: "0.25rem",
      borderBottom: "1px",
    },
    tdSumLabel: {
      border: "none",
      colSpan: 10,
      color: useColorModeValue("gray.600", "gray.400"),
      fontSize: "xs",
      fontFamily: "heading",
      textTransform: "uppercase" as const,
      letterSpacing: "wider",
      paddingEnd: "0.3rem",
      marginEnd: 0,
    },
  }

  return (
    <>
      <Text as="h3" {...styles.caption} marginBottom=".5rem">
        {caption}
      </Text>
      <Table.Root variant="line" {...styles.table}>
        <Table.Body>
          <Table.Row>
            {/* binary row */}
            <Table.Cell {...styles.td} {...styles.tdField} textAlign={rtl.left}>
              <Trans>Binaries</Trans>
            </Table.Cell>

            {reversedBits.map((bit) => {
              binaryCounter = binaryCounter / 2
              return (
                <DataGridCellTypeBinary binary={binaryCounter} bit={bit} key={nextId("td-bin")} />
              )
            })}

            <Table.Cell {...styles.td} borderBottom="0">
              &nbsp;
            </Table.Cell>
          </Table.Row>

          {/* bits row */}
          <Table.Row>
            <Table.Cell {...styles.td} {...styles.tdField} textAlign={rtl.left}>
              <Trans>Bits</Trans>
            </Table.Cell>

            {reversedBits.map((bit) => {
              return <DataGridCellTypeBit bit={bit} key={nextId("td-bit")} />
            })}

            <Table.Cell {...styles.td} borderBottom="0">
              &nbsp;
            </Table.Cell>
          </Table.Row>

          {/* decimal row */}
          <Table.Row>
            <Table.Cell {...styles.td} {...styles.tdField} textAlign={rtl.left}>
              <Trans>Decimals</Trans>
            </Table.Cell>

            {reversedBits.map((bit, i) => {
              return (
                <DataGridCellTypeDecimal
                  bits={reversedBits}
                  bit={bit}
                  i={i}
                  key={nextId("td-dec")}
                />
              )
            })}

            <Table.Cell {...styles.td} {...styles.tdSum} border="1px solid" borderBottom="0">
              {bitsToByte(bits)}
            </Table.Cell>
          </Table.Row>

          {/* Summary row */}
          <Table.Row border={"none"}>
            <Table.Cell {...styles.tdSumLabel} textAlign={rtl.right}>
              {sumLabel}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </>
  )
}

export default BitsTableDesktop
