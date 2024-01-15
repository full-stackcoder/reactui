import React from 'react'
import withLayout from '../../utils/withLayout'

type NavProps = React.HTMLProps<HTMLElement> & {
  className?: string
  children: React.ReactNode
}

const Nav = ({ className, children, ...props }: NavProps) => {
  const classNames = ['fscNav', className && `${className}`].filter(Boolean).join(' ')
  return (
    <nav {...props} className={classNames}>
      {children}
    </nav>
  )
}

export default withLayout(Nav)
