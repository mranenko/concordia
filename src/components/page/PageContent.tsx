import './PageContent.scss'

interface PageContentProps {
  children: React.ReactNode
  className?: string
}

const PageContent = ({ children, className = '' }: PageContentProps) => {
  return (
    <div className={`page-content ${className}`}>
      {children}
    </div>
  )
}

export { PageContent }
