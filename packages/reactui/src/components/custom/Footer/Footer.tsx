import React, { ReactNode } from 'react'
import withLayout from '../../utils/withLayout'

type FooterProps = React.HTMLProps<HTMLElement> & {
  className?: string
  children: ReactNode
}

const Footer = ({ className, children, ...props }: FooterProps) => {
  const classNames = ['fscFooter', className && `${className}`].filter(Boolean).join(' ')
  return (
    <footer {...props} className={classNames}>
      {children}
    </footer>
  )
}

export default withLayout(Footer)
