import { useContext, useEffect } from 'react'

import { ThemeMode } from '$/types/emotion'

import { CustomThemeContext } from '../providers/CustomThemeProvider'

export interface IArgMode {
  mode: ThemeMode
}

export const argMode = {
  mode: {
    defaultValue: ThemeMode.DARK,
    options: [ThemeMode.LIGHT, ThemeMode.DARK],
    type: { name: 'string', required: true },
    control: { type: 'radio' },
  },
}

const useChangeThemeByMode = (mode: ThemeMode) => {
  const { toggleColorMode } = useContext(CustomThemeContext)

  useEffect(() => {
    if (mode) {
      toggleColorMode(mode)
    } // eslint-disable-next-line
  }, [])
}

export default useChangeThemeByMode
