import {
  BaseColorRow,
  ColorRow,
  GridRow,
  Page,
  PageContent,
  ThemeExplorer,
} from '../../components'

const DashboardPage = () => {
  return (
    <Page className='dashboard'>
      <PageContent>
        <GridRow alignItems='center' gap={2} justifyContent='space-between'>
          <h1 className='title display'>Concordia</h1>
          <ThemeExplorer />
        </GridRow>
      </PageContent>
      <BaseColorRow />
      <ColorRow color='primary' />
      <ColorRow color='secondary' />
      <ColorRow color='neutral' />
    </Page>
  )
}

export { DashboardPage }
