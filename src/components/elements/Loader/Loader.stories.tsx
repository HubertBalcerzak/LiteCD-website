import { Meta } from '@storybook/react'
import LoaderComponent, { LoaderProps } from './index'

export default {
  title: 'Components/Elements',
  component: LoaderComponent,
  args: {
    loaderColor: '#000000'
  } as LoaderProps,
  argTypes: {
    loaderColor: {
      name: 'Loader color',
      type: { name: 'string', required: true },
      control: { type: 'color' }
    },
    style: { control: false }
  }
} as Meta

export const Loader = (args: LoaderProps) => <LoaderComponent {...args} />
