import { css } from '@emotion/css'
import React from 'react'

import type { IArgMode } from '$/hooks/useChangeThemeByMode'

import ThemeSwitchComponent from './index'

export default {
  title: 'Components/Elements',
  component: ThemeSwitchComponent,
}

export const ThemeSwitch = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultMode,
  ...args
}: {
  defaultMode: IArgMode['mode']
}) => (
  <div
    className={css`
      padding: 15px;
      background-color: white;
    `}
  >
    <ThemeSwitchComponent {...args} />
  </div>
)
