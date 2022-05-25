import styled from '@emotion/styled'
import { Card } from '@mui/material'

const CustomizedCard = styled(Card)`
  padding: ${(props) => props.theme.spacing(2)};
`

export default CustomizedCard
