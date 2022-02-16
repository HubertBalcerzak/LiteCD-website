import React from 'react'
import { useTheme } from '@emotion/react'
import { css } from '@emotion/css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export interface CustomizedBoxProps {
  icon?: React.ReactNode
  title: string
}

const CardTitle: React.FC<CustomizedBoxProps> = ({ icon, title }) => {
  const theme = useTheme()

  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        margin-bottom: 6px;
        color: ${theme.palette.text.primary};
        font-weight: ${theme.typography.fontWeightMedium};
        font-size: 22px;
      `}
    >
      {icon}
      <div
        className={css`
          display: inline-flex;
          align-items: end;
          margin-left: 10px;
        `}
      >
        {title}
        <ChevronRightIcon
          className={css`
            margin-left: 5px;
            font-size: 20px;
          `}
        />
      </div>
    </div>
  )
}

export default CardTitle
