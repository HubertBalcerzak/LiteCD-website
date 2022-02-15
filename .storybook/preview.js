import { addDecorator } from '@storybook/react'
import { CssBaseline } from '@material-ui/core'
import GlobalStyle from '../src/components/elements/Layout/GlobalStyle'
import { ThemeProvider } from 'emotion-theming'
import theme from '../src/assets/theme';

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {GlobalStyle}
    <CssBaseline />
    {story()}
  </ThemeProvider>
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
