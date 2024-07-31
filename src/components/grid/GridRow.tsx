import './GridRow.scss'

interface GridRowProps {
  alignItems?: string
  children: React.ReactNode
  className?: string
  gap?: number
  justifyContent?: string
}

const GridRow = ({
  alignItems = 'normal',
  children,
  className = '',
  gap = 0,
  justifyContent = 'start'
}: GridRowProps) => {
  const gridRowStyle = {
    alignItems,
    'gap': `${gap}rem`,
    justifyContent,
  }

  return (
    <div className={`grid-row ${className}`} style={gridRowStyle}>
      {children}
    </div>
  )
}

export { GridRow }
