import React from 'react'

import type { IApplicationsPageProps } from '../../pages/applications'
import ApplicationsPageView from './ApplicationsPageView'
import useApplicationsPage from './useApplicationsPage'

const ApplicationsPage = (props: IApplicationsPageProps) => {
  const state = useApplicationsPage(props)
  return <ApplicationsPageView {...props} {...state} />
}

export default ApplicationsPage
