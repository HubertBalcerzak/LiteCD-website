import { ThemeProvider } from '@emotion/react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import React from 'react'

import GlobalStyle from '$/components/elements/Layout/GlobalStyle'

import CustomThemeProvider, {
  CustomThemeContext,
} from '../providers/CustomThemeProvider'

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
