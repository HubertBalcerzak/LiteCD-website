import React from 'react'
import { css } from '@emotion/css'

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
        background-color: ${theme.palette.background.default}
      `}
    >
      <div>logo placeholder</div>
      <ThemeSwitch defaultChecked />
    </Page.Header>
  )
}

export default Header
