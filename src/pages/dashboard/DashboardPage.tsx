import {
  BaseColorRow,
  ColorRow,
} from '../../components'
import {
  Page,
  PageContent,
} from '../../layouts'

const DashboardPage = () => {
  return (
    <Page className='dashboard'>
      <PageContent>
        <h1 className='title display'>Concordia</h1>
      </PageContent>
      <BaseColorRow />
      <ColorRow color='primary' />
      <ColorRow color='neutral' />
    </Page>
  )
}

export { DashboardPage }
