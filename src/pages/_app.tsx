import React from 'react'
import { AppProps } from 'next/app'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@emotion/react'

import GlobalStyle from '../components/elements/Layout/GlobalStyle'

// TODO: Export theme to its own file and include it in the storybook
const theme = createTheme()

const App = ({ Component, pageProps }: AppProps) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      {GlobalStyle}
      <Component {...pageProps} />
    </ThemeProvider>
  </MuiThemeProvider>
)

export default App
