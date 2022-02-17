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
              <CardTitle icon={<AdminPanelSettingsIcon />}>Administration Console</CardTitle>
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
              <CardTitle icon={<AppsIcon />}>Applications</CardTitle>
            </a>
          </Link>
          Public apps
        </CustomizedCard>

        <CustomizedCard
          className={css`
            grid-area: starchasers;
          `}
        >
          <Link href='https://github.com/Starchasers' passHref>
            <a target='_blank' rel='noopener noreferrer'>
              <CardTitle icon={<StarOutlineIcon />}>Starchasers</CardTitle>
            </a>
          </Link>
          Our beloved organization
        </CustomizedCard>

        <CustomizedCard
          className={css`
            grid-area: github;
          `}
        >
          <Link href='https://github.com/HubertBalcerzak/LiteCD' passHref>
            <a target='_blank' rel='noopener noreferrer'>
              <CardTitle icon={<GitHubIcon />}>Github</CardTitle>
            </a>
          </Link>
          Project repository
        </CustomizedCard>

        <CustomizedCard
          className={css`
            grid-area: issues;
          `}
        >
          <Link href='https://github.com/HubertBalcerzak/LiteCD/issues' passHref>
            <a target='_blank' rel='noopener noreferrer'>
              <CardTitle icon={<BugReportIcon />}>Report an issue</CardTitle>
            </a>
          </Link>
        </CustomizedCard>
      </div>
    </Container>
  )
}

export default HomePageView
