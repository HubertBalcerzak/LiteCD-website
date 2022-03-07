import { Meta } from '@storybook/react'
import LoaderComponent, { LoaderProps } from './index'
import { argMode, IArgMode } from '../../../hooks/useChangeThemeByMode'
import React from 'react'

export default {
  title: 'Components/Elements',
  component: LoaderComponent,
  args: {},
  argTypes: {
    loaderColor: {
      name: 'Loader color',
      type: { name: 'string', required: true },
      control: { type: 'color' }
    },
    style: { control: false },
    ...argMode
  }
} as Meta

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Loader = ({ mode, ...args }: LoaderProps & IArgMode) => <LoaderComponent {...args} />
