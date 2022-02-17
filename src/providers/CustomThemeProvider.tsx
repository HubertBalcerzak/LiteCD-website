import React, { createContext, useMemo, useState } from 'react'
import { Theme, createTheme } from '@material-ui/core/styles'

import { ThemeMode } from '../../@types/emotion.d'
import getDesignTokens from '../assets/theme'

interface ICustomThemeContext {
  mode: ThemeMode
  toggleColorMode: () => void
  theme: Partial<Theme>
}

const defaultValue: ICustomThemeContext = {
  mode: ThemeMode.DARK,
  toggleColorMode: () => null,
  theme: createTheme(getDesignTokens(ThemeMode.DARK))
}

export const CustomThemeContext = createContext<ICustomThemeContext>(defaultValue)

const CustomThemeProvider: React.FC = (props) => {
  const [mode, setMode] = useState<ThemeMode>(defaultValue.mode)

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT))
  }

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
    <CustomThemeContext.Provider value={{ mode, toggleColorMode, theme }}>
      {props.children}
    </CustomThemeContext.Provider>
  )
}

export default CustomThemeProvider
