import type { Meta } from '@storybook/react'
import React from 'react'

import type { IArgMode } from '../../../hooks/useChangeThemeByMode'
import { argMode } from '../../../hooks/useChangeThemeByMode'
import type { LoaderProps } from './index'
import LoaderComponent from './index'

export default {
  title: 'Components/Elements',
  component: LoaderComponent,
  args: {},
  argTypes: {
    loaderColor: {
      name: 'Loader color',
      type: { name: 'string', required: true },
      control: { type: 'color' },
    },
    style: { control: false },
    ...argMode,
  },
} as Meta

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Loader = ({ mode, ...args }: LoaderProps & IArgMode) => (
  <LoaderComponent {...args} />
)
