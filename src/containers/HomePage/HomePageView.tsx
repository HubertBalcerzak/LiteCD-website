import React from 'react'
import { useTheme } from '@emotion/react'
import { css } from '@emotion/css'
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
import CardTitle from '../../components/elements/CardTitle'
import Link from 'next/link'

interface IHomePageViewProps extends IHomePageProps, IHomePageStateProps {}

const HomePageView = ({}: IHomePageViewProps) => {
  const theme = useTheme()

  return (
    <Container>
      <div
        className={css`
          margin-top: 50px;
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
        <CustomizedCard
          className={css`
            grid-area: console;
          `}
        >
          <Link href='#' passHref>
            <a>
              <CardTitle icon={<AdminPanelSettingsIcon />} title='Administration Console' />
            </a>
          </Link>
          Everything you need to manage your instances
        </CustomizedCard>

        <CustomizedCard
          className={css`
            grid-area: apps;
          `}
        >
          <Link href='#' passHref>
            <a>
              <CardTitle icon={<AppsIcon />} title='Applications' />
            </a>
          </Link>
          Public apps
        </CustomizedCard>

        <CustomizedCard
          className={css`
            grid-area: starchasers;
          `}
        >
          <Link href='#' passHref>
            <a>
              <CardTitle icon={<StarOutlineIcon />} title='Starchasers' />
            </a>
          </Link>
          Our beloved organization
        </CustomizedCard>

        <CustomizedCard
          className={css`
            grid-area: github;
          `}
        >
          <Link href='#' passHref>
            <a>
              <CardTitle icon={<GitHubIcon />} title='Github' />
            </a>
          </Link>
          Project repository
        </CustomizedCard>

        <CustomizedCard
          className={css`
            grid-area: issues;
          `}
        >
          <Link href='#' passHref>
            <a>
              <CardTitle icon={<BugReportIcon />} title='Report an issue' />
            </a>
          </Link>
        </CustomizedCard>
      </div>
    </Container>
  )
}

export default HomePageView
