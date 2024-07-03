import { NavLink } from 'react-router-dom'
import { Page } from '../../layouts'
import './DashboardPage.scss'

const DashboardPage = () => {
  return (
    <Page className='dashboard'>
      <h1 className='title'>welcome.</h1>
      <div className='flex-row gap-1'>
        <NavLink to='/color'>color</NavLink> •
        <NavLink to='/typography'>typography</NavLink>
      </div>
    </Page>
  )
}

export { DashboardPage }
