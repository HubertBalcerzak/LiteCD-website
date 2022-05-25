import React from 'react'

import Layout from '../components/elements/Layout'
import ApplicationsPage from '../containers/ApplicationsPage'

export interface IApplicationsPageProps {}

const Home = (props: IApplicationsPageProps) => (
  <Layout {...props}>
    <ApplicationsPage {...props} />
  </Layout>
)

export default Home
