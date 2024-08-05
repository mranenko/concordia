import { ThemeExplorer } from '../../components'
import './DashboardHeader.scss'

const DashboardHeader = () => {
  return (
    <div className='dashboard-header'>
      <ThemeExplorer />
      <h1 className='dashboard-title'>Concordia</h1>
    </div>
  )
}

export { DashboardHeader }
