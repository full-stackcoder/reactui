import React, { ReactNode } from 'react'
import withLayout from '../../utils/withLayout'

type HeaderProps = React.HTMLProps<HTMLElement> & {
  className?: string
  children: ReactNode
}

const Header = ({ className, children, ...props }: HeaderProps) => {
  const classNames = ['fscHeader', className && `${className}`].filter(Boolean).join(' ')
  return (
    <header {...props} className={classNames}>
      {children}
    </header>
  )
}

export default withLayout(Header)
