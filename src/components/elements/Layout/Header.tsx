import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { Typography } from '@mui/material'
import React from 'react'

import Page from '../../blocks/Page'
import ThemeSwitch from '../ThemeSwitch'

interface IHeader {
  children?: null
}

const Header: React.FC<IHeader> = (props) => {
  const theme = useTheme()

  return (
    <Page.Header
      {...props}
      className={css`
        display: grid;
        grid-template-columns: 1fr auto;
        padding: 5px 20px;
        background-color: ${theme.palette.primary.dark};
      `}
    >
      <Typography variant='h6'>LiteCD</Typography>
      <ThemeSwitch />
    </Page.Header>
  )
}

export default Header
