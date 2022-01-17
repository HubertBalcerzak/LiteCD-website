import { Meta } from '@storybook/react'
import PageComponent from './index'

// Just an example story, we know it is useless

export default {
  title: 'Components/Blocks',
  component: PageComponent
} as Meta

export const Page = () => (
  <PageComponent>
    <PageComponent.Header />
    <PageComponent.Content />
    <PageComponent.Footer />
  </PageComponent>
)
