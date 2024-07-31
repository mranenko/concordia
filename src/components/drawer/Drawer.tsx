import './Drawer.scss'

interface DrawerProps {
  active?: boolean
  children: React.ReactNode
  className?: string
}

const Drawer = ({ active = false, children, className = '' }: DrawerProps) => {
  return (
    <div className={`drawer ${className} ${active && 'active'}`}>
      {children}
    </div>
  )
}

export { Drawer }
