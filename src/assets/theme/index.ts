import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 576,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200
    }
  }
})

export default theme
