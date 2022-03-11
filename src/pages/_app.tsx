import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import { SessionProvider } from 'next-auth/react'

import GlobalStyle from '../components/elements/Layout/GlobalStyle'
import CustomThemeProvider, { CustomThemeContext } from '../providers/CustomThemeProvider'

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <SessionProvider session={session}>
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
    </SessionProvider>
  )
}

export default App
