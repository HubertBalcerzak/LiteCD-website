import styled from '@emotion/styled'
import { Card } from '@mui/material'

const CustomizedCard = styled(Card)`
  padding: ${(props) => props.theme.spacing(2)}px;
  color: ${(props) => props.theme.palette.text.secondary};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  font-size: 16px;
`

export default CustomizedCard
