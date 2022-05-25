import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material'
import React from 'react'
// import { useTheme } from '@emotion/react'
// import { css } from '@emotion/css'

type TApplicationRow = {
  id: number
  title: string
  tags?: string
  buttons?: React.ReactNode
}

interface ApplicationListProps {
  appList: TApplicationRow[]
}

const ApplicationList = (props: ApplicationListProps) => {
  // TODO add theme?

  return (
    <TableContainer>
      <Table aria-label='Application list'>
        <TableBody>
          {props.appList?.map((app) => (
            <TableRow key={app.id}>
              <TableCell>{app.title}</TableCell>
              <TableCell align='right'>{app.tags}</TableCell>
              <TableCell align='right'>{app.tags}</TableCell>
              <TableCell align='right'>{app.buttons}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ApplicationList
