import { Palette } from '@phosphor-icons/react'
import { useState } from 'react'

import { Drawer } from '../../components'

const ThemeExplorer = () => {
  const [isThemeExplorerActive, setIsThemeExplorerActive] = useState(false)
  const showThemeExplorer = () => {
    setIsThemeExplorerActive(!isThemeExplorerActive)
  }

  return (
    <>
      <button className='button' onClick={showThemeExplorer}>
        <i><Palette weight='bold' /></i>
        <span>Theme explorer</span>
      </button>

      <Drawer active={isThemeExplorerActive}>
        Under construction
      </Drawer>
    </>
  )
}

export { ThemeExplorer }
