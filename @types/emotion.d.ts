import '@emotion/react'

import { Theme as ITheme } from '@material-ui/core'

declare module '@emotion/react' {
  export interface Theme extends ITheme {
    // palette: Palette & {
    //   mode: 'dark' | 'light'
    // }
  }
}

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark'
}
