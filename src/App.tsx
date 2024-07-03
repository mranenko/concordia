import {
  Route,
  Routes,
} from 'react-router-dom'

import {
  ColorPage,
  DashboardPage,
  TypographyPage,
} from './pages'

import './assets/styles/index.scss'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<DashboardPage />} />
      <Route path='/color' element={<ColorPage />} />
      <Route path='/typography' element={<TypographyPage />} />
    </Routes>
  )
}

export { App }
