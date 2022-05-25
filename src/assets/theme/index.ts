import { rgba } from 'polished'

import { ThemeMode } from '$/types/emotion'

const getDesignTokens = (mode: ThemeMode) => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  palette: {
    mode,
    ...(mode === ThemeMode.LIGHT
      ? {
          primary: {
            main: '#b3e5fc',
            light: '#e6ffff',
            dark: '#82b3c9',
            contrastText: '#000',
          },
          secondary: {
            main: '#ffa726',
            light: '#ffd95b',
            dark: '#e78b12',
            contrastText: '#000',
          },
          text: {
            primary: rgba(0, 0, 0, 0.87),
            secondary: rgba(0, 0, 0, 0.6),
            disabled: rgba(0, 0, 0, 0.38),
          },
          background: {
            default: '#eceff1',
          },
        }
      : {
          primary: {
            main: '#455a64',
            light: '#718792',
            dark: '#1c313a',
            contrastText: '#fff',
          },
          secondary: {
            main: '#ffa726',
            light: '#ffd95b',
            dark: '#e78b12',
            contrastText: '#000',
          },
          text: {
            primary: '#fff',
            secondary: rgba(255, 255, 255, 0.7),
            disabled: rgba(255, 255, 255, 0.5),
            icon: rgba(255, 255, 255, 0.5),
          },
          background: {
            default: '#4b636e',
          },
        }),
  },
})

export default getDesignTokens
