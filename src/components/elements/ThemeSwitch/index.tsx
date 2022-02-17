import React, { useContext } from 'react'
import { ThemeMode } from '../../../../@types/emotion.d'

import { CustomThemeContext } from '../../../providers/CustomThemeProvider'
import DaySwitch from './daySwitch'

const ThemeSwitch = () => {
  const customThemeContext = useContext(CustomThemeContext)

  return (
    <DaySwitch
      defaultChecked={customThemeContext.mode === ThemeMode.DARK}
      onChange={customThemeContext.toggleColorMode}
      mode={customThemeContext.mode}
      inputProps={{ 'aria-label': 'Day switch' }}
    />
  )
}

export default ThemeSwitch
