import { addDecorator } from '@storybook/react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from 'emotion-theming'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

import GlobalStyle from '../src/components/elements/Layout/GlobalStyle'
import CustomThemeProvider, { CustomThemeContext } from '../src/providers/CustomThemeProvider'
// @ts-ignore
import React from 'react'
import useChangeThemeByMode from '../src/hooks/useChangeThemeByMode'

addDecorator((story, storyContext) => (
  <CustomThemeProvider>
    <CustomThemeContext.Consumer>
      {(customThemeContext) => (
        <MuiThemeProvider theme={customThemeContext.theme}>
          <ThemeProvider theme={customThemeContext.theme}>
            {GlobalStyle}
            <CssBaseline />
            {React.createElement(() => {
              useChangeThemeByMode(storyContext.args?.mode)
              return story()
            })}
            {/*{story()}*/}
          </ThemeProvider>
        </MuiThemeProvider>
      )}
    </CustomThemeContext.Consumer>
  </CustomThemeProvider>
))

const customViewports = {
  iphoneX: {
    name: 'iphoneX',
    styles: {
      width: '375px',
      height: '635px'
    }
  },
  ipad: {
    name: 'ipad',
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  ipadPro: {
    name: 'ipadPro',
    styles: {
      width: '1024px',
      height: '1366px'
    }
  },
  laptopL: {
    name: 'laptopL',
    styles: {
      width: '1440px',
      height: '1024px'
    }
  },
  desktopFHD: {
    name: 'desktopFHD',
    styles: {
      width: '1920px',
      height: '1080px'
    }
  }
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: customViewports
  }
}
