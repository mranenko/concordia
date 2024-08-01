import { Palette } from '@phosphor-icons/react'
import { useState } from 'react'

import { Drawer } from '../../components'

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
        Under construction
      </Drawer>
    </>
  )
}

export { ThemeExplorer }
