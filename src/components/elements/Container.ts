import styled from '@emotion/styled'
import theme from '../../assets/theme'
import constants from '../../assets/theme/constants'

const Container = styled('div')`
  width: 94vw;
  max-width: 1660px;
  padding: 2em 0;
  margin: 0 auto;
  @media (max-width: ${theme.breakpoints.values.xl}) {
    width: ${constants.containerSizes.lg};
  }
  @media (max-width: ${theme.breakpoints.values.lg}) {
    width: ${constants.containerSizes.md};
  }
  @media (max-width: ${theme.breakpoints.values.md}) {
    width: ${constants.containerSizes.sm};
  }
  @media (max-width: ${theme.breakpoints.values.sm}) {
    width: 90%;
  }
`

export default Container
