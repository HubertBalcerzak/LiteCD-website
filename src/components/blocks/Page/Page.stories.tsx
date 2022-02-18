import { Meta } from '@storybook/react'
import PageComponent from './index'
import { argMode } from '../../../hooks/useChangeThemeByMode'
import React from 'react'

export default {
  title: 'Components/Blocks',
  component: PageComponent,
  argTypes: {
    ...argMode
  }
} as Meta

export const Page = () => (
  <PageComponent>
    <PageComponent.Header />
    <PageComponent.Content />
    <PageComponent.Footer />
  </PageComponent>
)
