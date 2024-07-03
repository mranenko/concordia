import './Page.scss'

interface PageProps {
  children: React.ReactNode
  className?: string
}

const Page = ({ children, className = '' }: PageProps) => {
  return (
    <div className={`page ${className}`}>
      {children}
    </div>
  )
}
export { Page }
