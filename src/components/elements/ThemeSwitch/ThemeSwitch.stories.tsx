import ThemeSwitchComponent from './index'
import { IArgMode } from '../../../hooks/useChangeThemeByMode'
import React from 'react'
import { css } from '@emotion/css'

export default {
  title: 'Components/Elements',
  component: ThemeSwitchComponent
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ThemeSwitch = ({ defaultMode, ...args }: { defaultMode: IArgMode['mode'] }) => (
  <div
    className={css`
      padding: 15px;
      background-color: white;
    `}
  >
    <ThemeSwitchComponent {...args} />
  </div>
)
