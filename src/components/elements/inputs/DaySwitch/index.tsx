import styled from '@emotion/styled'
import type { SwitchProps } from '@mui/material'
import { Switch } from '@mui/material'
import type { FC } from 'react'

import { ThemeMode } from '$/types/emotion'

export interface ISwitchProps extends SwitchProps {
  value: ThemeMode
}

const DaySwitch: FC<ISwitchProps> = styled(Switch)((props) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 1 22 22"><path fill="${encodeURIComponent(
          '#000',
        )}" d="M 9.37 5.51 c -0.18 0.64 -0.27 1.31 -0.27 1.99 c 0 4.08 3.32 7.4 7.4 7.4 c 0.68 0 1.35 -0.09 1.99 -0.27 C 17.45 17.19 14.93 19 12 19 c -3.86 0 -7 -3.14 -7 -7 c 0 -2.93 1.81 -5.45 4.37 -6.49 Z M 12 3 c -4.97 0 -9 4.03 -9 9 s 4.03 9 9 9 s 9 -4.03 9 -9 c 0 -0.46 -0.04 -0.92 -0.1 -1.36 c -0.98 1.37 -2.58 2.26 -4.4 2.26 c -2.98 0 -5.4 -2.42 -5.4 -5.4 c 0 -1.81 0.89 -3.42 2.26 -4.4 c -0.44 -0.06 -0.9 -0.1 -1.36 -0.1 Z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: props.theme.palette.background.default,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor:
      props.value === ThemeMode.DARK
        ? props.theme.palette.secondary.light
        : props.theme.palette.secondary.dark,
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: props.theme.palette.background.default,
    borderRadius: 20 / 2,
  },
}))

export default DaySwitch
