import styled from '@emotion/styled'

const Content = styled('main')`
  position: relative;
  grid-area: content;
  z-index: 1;

  background: ${(props) => props.theme.palette.background.default};
`

export default Content
