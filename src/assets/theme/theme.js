import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: '576px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    }
  }
})

export default theme
