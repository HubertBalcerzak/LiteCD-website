import React from 'react'
import { AppProps } from 'next/app'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from '@emotion/react'

import GlobalStyle from '../components/elements/Layout/GlobalStyle'
import theme from '../assets/theme'
import { ColorModeContext } from '../assets/theme/colorModeProvider'

const App = ({ Component, pageProps }: AppProps) => (
  <ColorModeContext.Provider>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        {GlobalStyle}
        <Component {...pageProps} />
      </ThemeProvider>
    </MuiThemeProvider>
  </ColorModeContext.Provider>
)

export default App
