import React, { useContext } from 'react'
import { ThemeMode } from '../../../../@types/emotion'

import { CustomThemeContext } from '../../../providers/CustomThemeProvider'
import DaySwitch from '../inputs/DaySwitch'

const ThemeSwitch = () => {
  const customThemeContext = useContext(CustomThemeContext)

  return (
    <DaySwitch
      checked={customThemeContext.mode === ThemeMode.DARK}
      onChange={() => customThemeContext.toggleColorMode()}
      value={customThemeContext.mode}
      inputProps={{ 'aria-label': 'Day switch' }}
    />
  )
}

export default ThemeSwitch
