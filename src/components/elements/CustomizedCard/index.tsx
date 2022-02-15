import React from 'react'
import Link from 'next/link'
import { useTheme } from '@emotion/react'
import { css } from '@emotion/css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export interface CustomizedBoxProps {
  icon?: React.ReactNode
  link?: string
  children: React.ReactNode
}

const CustomizedCard: React.FC<CustomizedBoxProps> = ({ icon, link = '#', children }) => {
  const theme = useTheme()

  return (
    <div
      className={css`
        font-weight: ${theme.typography.fontWeightMedium};
      `}
    >
      <div
        className={css`
          display: inline-flex;
          align-items: center;
          color: ${theme.palette.text.primary};
          font-size: 22px; ;
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
          <Link href={link} passHref>
            <a>{title}</a>
          </Link>
          <ChevronRightIcon
            className={css`
              margin-left: 5px;
              font-size: 20px;
            `}
          />
        </div>
      </div>
      <div
        className={css`
          color: ${theme.palette.text.secondary};
          font-size: 18px;
          margin: 10px 0;
        `}
      >
        {children}
      </div>
    </div>
  )
}

export default CustomizedCard
