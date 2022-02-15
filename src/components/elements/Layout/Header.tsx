import React from 'react'
import { css } from '@emotion/css'

import Page from '../../blocks/Page'
import ThemeSwitch from '../ThemeSwitch'

const Header: React.FC = (props) => {
  return (
    <Page.Header
      {...props}
      className={css`
        display: flex;
        justify-content: space-between;
        padding: 5px 20px;
        background-color: #ccc8d0; //TODO change depending on color theme
      `}
    >
      <div>logo placeholder</div>
      <ThemeSwitch defaultChecked />
    </Page.Header>
  )
}

export default Header
