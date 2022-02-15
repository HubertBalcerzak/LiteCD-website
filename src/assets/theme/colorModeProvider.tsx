import React, { createContext, useState } from 'react'

export const ColorModeContext = createContext({ mode: 'light', switchColorMode: () => {} })

const ColorModeProvider = (props: any) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  const switchColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <ColorModeContext.Provider value={{ mode, switchColorMode }}>
      {props.children}
    </ColorModeContext.Provider>
  )
}

export default ColorModeProvider
