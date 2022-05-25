import type { Theme } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import React, { createContext, useMemo, useState } from 'react'

import getDesignTokens from '$/assets/theme'
import { ThemeMode } from '$/types/emotion'

interface ICustomThemeContext {
  mode: ThemeMode
  toggleColorMode: (mode?: ThemeMode) => void
  theme: Partial<Theme>
}

const defaultValue: ICustomThemeContext = {
  mode: ThemeMode.DARK,
  toggleColorMode: () => null,
  theme: createTheme(getDesignTokens(ThemeMode.DARK)),
}

export const CustomThemeContext =
  createContext<ICustomThemeContext>(defaultValue)

const CustomThemeProvider: React.FC = (props) => {
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')
  const [mode, setMode] = useState<ThemeMode>(
    prefersLightMode ? ThemeMode.LIGHT : defaultValue.mode,
  )

  const toggleColorMode = (mode?: ThemeMode) => {
    setMode(
      (prevMode) =>
        mode ??
        (prevMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT),
    )
  }

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
    <CustomThemeContext.Provider value={{ mode, toggleColorMode, theme }}>
      {props.children}
    </CustomThemeContext.Provider>
  )
}

export default CustomThemeProvider
