import { X } from '@phosphor-icons/react'

import './Drawer.scss'

interface DrawerProps {
  active?: boolean
  children: React.ReactNode
  className?: string
  toggleActive: () => void
}

const Drawer = ({ active = false, children, className = '', toggleActive }: DrawerProps) => {
  return (
    <div className={`drawer ${className} ${active && 'active'}`}>
      <a className='button-close' onClick={toggleActive}><X /></a>
      {children}
    </div>
  )
}

export { Drawer }
