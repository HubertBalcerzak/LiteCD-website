import ThemeSwitchComponent from './index'
import { argMode, IArgMode } from '../../../hooks/useChangeThemeByMode'
import React from 'react'
import { css } from '@emotion/css'
import { ThemeMode } from '../../../../@types/emotion'

export default {
  title: 'Components/Elements',
  component: ThemeSwitchComponent,
  args: {
    checked: true,
    value: null,
    inputProps: { 'aria-label': 'Day switch' }
  },
  argTypes: {
    defaultMode: { ...argMode.mode, name: 'mode' }
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ThemeSwitch = ({ defaultMode, ...args }: { defaultMode: IArgMode['mode'] }) => (
  <div
    className={css`
      padding: 15px;
      background-color: ${defaultMode === ThemeMode.LIGHT ? '#82b3c9' : '#1c313a'};
    `}
  >
    <ThemeSwitchComponent {...args} />
  </div>
)
