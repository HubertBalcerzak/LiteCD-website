import '@emotion/react'

import { Theme as ITheme } from '@material-ui/core'

declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}
