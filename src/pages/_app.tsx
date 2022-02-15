import React from 'react'
import { AppProps } from 'next/app'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from '@emotion/react'

import GlobalStyle from '../components/elements/Layout/GlobalStyle'
import theme from '../assets/theme'

const App = ({ Component, pageProps }: AppProps) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      {GlobalStyle}
      <Component {...pageProps} />
    </ThemeProvider>
  </MuiThemeProvider>
)

export default App
