import { ThemeMode } from '../../@types/emotion'
import { useContext, useEffect } from 'react'
import { CustomThemeContext } from '../providers/CustomThemeProvider'

export const argMode = {
  mode: {
    defaultValue: 'dark',
    options: ['light', 'dark'],
    type: { name: 'string', required: true },
    control: { type: 'radio' }
  }
}

const useChangeThemeByMode = (mode: ThemeMode) => {
  const { toggleColorMode } = useContext(CustomThemeContext)
  useEffect(() => toggleColorMode(mode), [mode])
}

export default useChangeThemeByMode
