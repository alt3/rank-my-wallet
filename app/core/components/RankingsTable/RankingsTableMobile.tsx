import { Text, useColorModeValue, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
import { DataGridCellTypeBinary } from "@components/DataGrid/DatagridCellTypeBinary"
import { DataGridCellTypeBit } from "@components/DataGrid/DatagridCellTypeBit"
import { DataGridCellTypeDecimal } from "@components/DataGrid/DataGridCellTypeDecimal"

import nextId from "react-id-generator"
import { bitsToByte } from "app/lib/utils"

interface RankingsTableProps {
  rankings: Array<{
    address: string
    balance: number
    rank: number
    position: string
  }>
}

export function RankingsTableMobile(rankings: RankingsTableProps) {
  console.log(rankings)

  return <h1>Mobile rankings table</h1>
}

export default RankingsTableMobile
