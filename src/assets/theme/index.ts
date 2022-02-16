import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200
    }
  },
  palette: {
    primary: {
      main: '#b3e5fc',
      light: '#e6ffff',
      dark: '#82b3c9',
      contrastText: '#000'
    },
    secondary: {
      main: '#ffa726',
      light: '#ffd95b',
      dark: '#c77800',
      contrastText: '#000'
    },
    background: {
      default: '#eceff1'
    }
  }
})

export default theme
