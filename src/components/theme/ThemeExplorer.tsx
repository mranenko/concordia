import { Palette } from '@phosphor-icons/react'
import { useState } from 'react'

import { Drawer } from '../../components'
import { setTheme } from '../../utilities'
import './ThemeExplorer.scss'

const ThemeExplorer = () => {
  const [isThemeExplorerActive, setIsThemeExplorerActive] = useState(false)
  const toggleThemeExplorer = () => {
    setIsThemeExplorerActive(!isThemeExplorerActive)
  }

  return (
    <>
      <button className='button' onClick={toggleThemeExplorer}>
        <i><Palette weight='bold' /></i>
        <span>Theme explorer</span>
      </button>

      <Drawer active={isThemeExplorerActive} toggleActive={toggleThemeExplorer}>
        <div className='theme-grid'>
          <div className='theme calypso' onClick={() => setTheme('calypso')}>
            <div className='theme-color-row'>
              <div className='theme-color primary'></div>
              <div className='theme-color secondary'></div>
              <div className='theme-color neutral'></div>
            </div>
            <div className='theme-name'>calypso</div>
          </div>

          <div className='theme plum' onClick={() => setTheme('plum')}>
            <div className='theme-color-row'>
              <div className='theme-color primary'></div>
              <div className='theme-color secondary'></div>
              <div className='theme-color neutral'></div>
            </div>
            <div className='theme-name'>plum</div>
          </div>

          <div className='theme affair' onClick={() => setTheme('affair')}>
            <div className='theme-color-row'>
              <div className='theme-color primary'></div>
              <div className='theme-color secondary'></div>
              <div className='theme-color neutral'></div>
            </div>
            <div className='theme-name'>affair</div>
          </div>

          <div className='theme camelot' onClick={() => setTheme('camelot')}>
            <div className='theme-color-row'>
              <div className='theme-color primary'></div>
              <div className='theme-color secondary'></div>
              <div className='theme-color neutral'></div>
            </div>
            <div className='theme-name'>camelot</div>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export { ThemeExplorer }
