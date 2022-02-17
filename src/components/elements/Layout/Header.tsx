import React from 'react'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

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
        display: flex;
        justify-content: space-between;
        padding: 5px 20px;
        background-color: ${theme.palette.primary.dark};
      `}
    >
      <div>logo placeholder</div>
      <ThemeSwitch />
    </Page.Header>
  )
}

export default Header
