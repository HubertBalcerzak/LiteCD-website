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
import { Typography } from '@mui/material'

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

            a {
              h2,
              h3 {
                font-size: ${theme.typography.h5.fontSize};
              }
            }
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
              <CardTitle icon={<AdminPanelSettingsIcon />}>
                <Typography variant='h5' variantMapping={{ h5: 'h2' }}>
                  Administration Console
                </Typography>
              </CardTitle>
            </a>
          </Link>
          <Typography variant='body1'>Everything you need to manage your instances</Typography>
        </CustomizedCard>

        <CustomizedCard
          className={css`
            grid-area: apps;
          `}
        >
          <Link href='#' passHref>
            <a>
              <CardTitle icon={<AppsIcon />}>
                <Typography variant='h5' variantMapping={{ h5: 'h2' }}>
                  Applications
                </Typography>
              </CardTitle>
            </a>
          </Link>
          <Typography variant='body1'>Public apps</Typography>
        </CustomizedCard>

        <CustomizedCard
          className={css`
            grid-area: starchasers;
          `}
        >
          <Link href='https://github.com/Starchasers' passHref>
            <a target='_blank' rel='noopener noreferrer'>
              <CardTitle icon={<StarOutlineIcon />}>
                <Typography variant='h6' variantMapping={{ h6: 'h3' }}>
                  Starchasers
                </Typography>
              </CardTitle>
            </a>
          </Link>
          <Typography variant='body1'>Our beloved organization</Typography>
        </CustomizedCard>

        <CustomizedCard
          className={css`
            grid-area: github;
          `}
        >
          <Link href='https://github.com/HubertBalcerzak/LiteCD' passHref>
            <a target='_blank' rel='noopener noreferrer'>
              <CardTitle icon={<GitHubIcon />}>
                <Typography variant='h6' variantMapping={{ h6: 'h3' }}>
                  Github
                </Typography>
              </CardTitle>
            </a>
          </Link>
          <Typography variant='body1'>Project repository</Typography>
        </CustomizedCard>

        <CustomizedCard
          className={css`
            grid-area: issues;
          `}
        >
          <Link href='https://github.com/HubertBalcerzak/LiteCD/issues' passHref>
            <a target='_blank' rel='noopener noreferrer'>
              <CardTitle icon={<BugReportIcon />}>
                <Typography variant='h6' variantMapping={{ h6: 'h3' }}>
                  Report an issue
                </Typography>
              </CardTitle>
            </a>
          </Link>
        </CustomizedCard>
      </div>
    </Container>
  )
}

export default HomePageView
