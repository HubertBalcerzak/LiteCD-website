import styled from '@emotion/styled'

import Content from './Content'
import Footer from './Footer'
import Header from './Header'

const Page = styled('div')`
  display: grid;
  min-height: 100vh;
  width: 100%;

  background: ${(props) => props.theme.palette.background.default};

  grid-template-columns: auto;
  grid-template-areas:
    'nav'
    'content'
    'footer';
  grid-template-rows: auto 1fr auto;

  @media (max-width: ${(props) => props.theme.breakpoints.values.md + 'px'}) {
    grid-template-columns: 100%;
  }
`

type PageProps = typeof Page & {
  Content: typeof Content
  Footer: typeof Footer
  Header: typeof Header
}

const PageBlock = Page as PageProps

PageBlock.Content = Content
PageBlock.Footer = Footer
PageBlock.Header = Header

export default PageBlock
