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
  bits: Array<number>
  sumLabel?: string
}

export function BitsTableMobile({ caption, bits, sumLabel }: BitsTableProps) {
  const { i18n } = useLingui()
  const rtl = getRTL(i18n.locale)

  const reversedBits = [...bits].reverse() // create reversed clone so we can render top-down bits

  let binaryCounter = 256 // we will divide by two to generate the static binary cell headers

  const styles = {
    caption: {
      color: useColorModeValue("teal.500", "teal.300"),
    },
    table: {
      marginBottom: "3rem",
    },
    th: {
      paddingStart: 0,
      marginStart: 0,
      width: "33%",
    },
    tdSum: {
      colSpan: 1,
      fontWeight: "extrabold",
      color: useColorModeValue("teal.500", "teal.300"),
      paddingStart: 0,
    },
    tdSumLabel: {
      color: useColorModeValue("gray.600", "gray.400"),
      fontSize: "xs",
      fontFamily: "heading",
      textTransform: "uppercase" as const,
      letterSpacing: "wider",
      paddingStart: 0,
    },
  }

  return (
    <>
      <Text as="h3" {...styles.caption} marginBottom=".5rem">
        {caption}
      </Text>
      <Table.Root variant="line" {...styles.table}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader {...styles.th} textAlign={rtl.left}>
              <Trans>Binaries</Trans>
            </Table.ColumnHeader>
            <Table.ColumnHeader {...styles.th}>
              <Trans>Bits</Trans>
            </Table.ColumnHeader>
            <Table.ColumnHeader {...styles.th} textAlign={rtl.left}>
              <Trans>Decimals</Trans>
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {/* One row per bit */}
          {reversedBits.map((bit, i) => {
            binaryCounter = binaryCounter / 2

            return (
              <Table.Row key={nextId("tr")}>
                <DataGridCellTypeBinary binary={binaryCounter} bit={bit} key={nextId("td-bin")} />
                <DataGridCellTypeBit bit={bit} key={nextId("td-bit")} />
                <DataGridCellTypeDecimal
                  bits={reversedBits}
                  bit={bit}
                  i={i}
                  key={nextId("td-dec")}
                />
              </Table.Row>
            )
          })}

          {/* Summary row */}
          <Table.Row>
            <Table.Cell borderBottom={0} colSpan={2}></Table.Cell>
            <Table.Cell borderBottom={0} {...styles.tdSum} textAlign={rtl.left}>
              {bitsToByte(bits)}
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell borderBottom={0} colSpan={2}></Table.Cell>
            <Table.Cell borderBottom={0} {...styles.tdSumLabel} textAlign={rtl.left} paddingTop={0}>
              {sumLabel}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </>
  )
}

export default BitsTableMobile
