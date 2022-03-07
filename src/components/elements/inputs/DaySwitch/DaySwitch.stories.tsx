import DaySwitchComponent, { ISwitchProps } from './index'
import { argMode, IArgMode } from '../../../../hooks/useChangeThemeByMode'
import React from 'react'
import { css } from '@emotion/css'
import getDesignTokens from '../../../../assets/theme'

export default {
  title: 'Components/Elements',
  component: DaySwitchComponent,
  argTypes: {
    daySwitchColor: {
      name: 'DaySwitch color',
      type: { name: 'string', required: true },
      control: { type: 'color' }
    },
    action: {
      table: { disable: true }
    },
    centerRipple: {
      table: { disable: true }
    },
    disableTouchRipple: {
      table: { disable: true }
    },
    focusRipple: {
      table: { disable: true }
    },
    focusVisibleClassName: {
      table: { disable: true }
    },
    LinkComponent: {
      table: { disable: true }
    },
    onFocusVisible: {
      table: { disable: true }
    },
    TouchRippleProps: {
      table: { disable: true }
    },
    ref: {
      table: { disable: true }
    },
    value: {
      table: { disable: true }
    },
    ...argMode
  }
}

export const DaySwitch = ({ mode, ...args }: ISwitchProps & IArgMode) => (
  <div
    className={css`
      padding: 15px;
      background-color: ${getDesignTokens(mode).palette.primary.dark};
    `}
  >
    <DaySwitchComponent {...args} value={mode} />
  </div>
)
