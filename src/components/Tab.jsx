import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

function Tab() {
  return (
    <div>
     <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>name</TableCell>
                    <TableCell>age</TableCell>
                    <TableCell>place</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Alvin</TableCell>
                    <TableCell>20</TableCell>
                    <TableCell>Pbvr</TableCell>
                </TableRow>
            </TableBody>
        </Table>
     </TableContainer>
      
    </div>
  )
}

export default Tab
