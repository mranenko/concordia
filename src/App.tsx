import { Route, Routes } from 'react-router-dom'

import { DashboardPage } from './pages'

import './assets/styles/index.scss'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<DashboardPage />} />
    </Routes>
  )
}

export { App }
