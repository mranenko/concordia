import {
  BaseColorRow,
  ColorRow,
  DashboardHeader,
  Page,
  PageContent,
} from '../../components'

const DashboardPage = () => {
  return (
    <Page className='dashboard'>
      <PageContent>
        <DashboardHeader />
      </PageContent>
      <BaseColorRow />
      <ColorRow color='primary' />
      <ColorRow color='secondary' />
      <ColorRow color='neutral' />
    </Page>
  )
}

export { DashboardPage }
