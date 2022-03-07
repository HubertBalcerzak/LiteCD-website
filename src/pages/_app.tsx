import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'

import GlobalStyle from '../components/elements/Layout/GlobalStyle'
import CustomThemeProvider, { CustomThemeContext } from '../providers/CustomThemeProvider'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CustomThemeProvider>
      <CustomThemeContext.Consumer>
        {(customThemeContext) => (
          <MuiThemeProvider theme={customThemeContext.theme}>
            <ThemeProvider theme={customThemeContext.theme}>
              {GlobalStyle}
              <Component {...pageProps} />
            </ThemeProvider>
          </MuiThemeProvider>
        )}
      </CustomThemeContext.Consumer>
    </CustomThemeProvider>
  )
}

export default App
