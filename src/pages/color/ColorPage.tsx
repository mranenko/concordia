import {
  Page,
  PageContent,
} from '../../layouts'
import './ColorPage.scss'

const ColorPage = () => {
  return (
    <Page className='color'>
      <PageContent>
        <h1 className='title'>color.</h1>

        <div className='swatches strip'>
          <div className='swatch rose'></div>
          <div className='swatch iris'></div>
          <div className='swatch linen'></div>
        </div>
      </PageContent>
    </Page>
  )
}

export { ColorPage }
