import { Meta } from '@storybook/react'
import CustomizedBoxComponent, { CustomizedBoxProps } from './index'

export default {
  title: 'Components/Elements',
  component: CustomizedBoxComponent,
  args: {
    // icon: ''
    link: '/',
    title: 'Example title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  } as CustomizedBoxProps,
  argTypes: {
    // icon: {
    //   name: "Icon",
    //   type: { name: 'string', required: true },
    //   control: { type: 'text' }
    // },
    link: {
      name: 'Link in the box title',
      type: { name: 'string', required: true },
      control: { type: 'text' }
    },
    title: {
      name: 'Box title',
      type: { name: 'string', required: true },
      control: { type: 'text' }
    },
    content: {
      name: 'Box content (under the title)',
      type: { name: 'string', required: false },
      control: { type: 'text' }
    }
  }
} as Meta

export const CustomizedBox = (args: CustomizedBoxProps) => <CustomizedBoxComponent {...args} />
