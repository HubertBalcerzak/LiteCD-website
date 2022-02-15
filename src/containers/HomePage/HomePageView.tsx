import React from 'react'
import { useTheme } from '@emotion/react'
import { css } from '@emotion/css'
import { Card } from '@mui/material'
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Apps as AppsIcon,
  StarOutline as StarOutlineIcon,
  GitHub as GitHubIcon,
  BugReport as BugReportIcon
} from '@mui/icons-material'

import { IHomePageProps } from '../../pages'
import { IHomePageStateProps } from './useHomePage'
import Container from '../../components/elements/Container'
import CustomizedCard from '../../components/elements/CustomizedCard'

interface IHomePageViewProps extends IHomePageProps, IHomePageStateProps {}

const HomePageView = ({}: IHomePageViewProps) => {
  const theme = useTheme()

  return (
    <div
      className={css`
        width: 100%;
        height: 100%;
        background-color: aliceblue;
      `}
    >
      <Container>
        <div
          className={css`
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: repeat(3, 1fr);
            grid-template-areas:
              'console apps starchasers'
              'console apps github'
              'console apps issues';
            grid-column-gap: 16px;
            grid-row-gap: 16px;

            @media (max-width: ${theme.breakpoints.values.lg}px) {
              grid-template-columns: 1fr 1fr;
              grid-template-rows: repeat(6, 1fr);
              grid-template-areas:
                'console starchasers'
                'console starchasers'
                'console github'
                'apps github'
                'apps issues'
                'apps issues';
            }

            @media (max-width: ${theme.breakpoints.values.sm}px) {
              grid-template-columns: 1fr;
              grid-template-rows: unset;
              grid-template-areas:
                'console'
                'apps'
                'starchasers'
                'github'
                'issues';
            }
          `}
        >
          <Card
            className={css`
              grid-area: console;
              padding: ${theme.spacing(2)}px;
            `}
          >
            <CustomizedCard icon={<AdminPanelSettingsIcon />} title='Administration Console'>
              Everything you need to manage your instances
            </CustomizedCard>
          </Card>
          <Card
            className={css`
              grid-area: apps;
              padding: ${theme.spacing(2)}px;
            `}
          >
            <CustomizedCard icon={<AppsIcon />} title='Applications'>
              Public apps
            </CustomizedCard>
          </Card>
          <Card
            className={css`
              grid-area: starchasers;
              padding: ${theme.spacing(2)}px;
            `}
          >
            <CustomizedCard icon={<StarOutlineIcon />} title='Starchasers'>
              Our beloved organization
            </CustomizedCard>
          </Card>
          <Card
            className={css`
              grid-area: github;
              padding: ${theme.spacing(2)}px;
            `}
          >
            <CustomizedCard icon={<GitHubIcon />} title='Github'>
              Project repository
            </CustomizedCard>
          </Card>
          <Card
            className={css`
              grid-area: issues;
              padding: ${theme.spacing(2)}px;
            `}
          >
            <CustomizedCard icon={<BugReportIcon />} title='Report an issue' />
          </Card>
        </div>
      </Container>
    </div>
  )
}

export default HomePageView
