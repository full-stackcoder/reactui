import React from 'react'
import withLayout from '../../utils/withLayout'
import Nav from '../Nav/Nav'

type ToolbarProps = React.HTMLProps<HTMLElement> & {
  className?: string
  children: React.ReactNode
}

const Toolbar = ({ className, children, ...props }: ToolbarProps) => {
  const classNames = ['fscToolbar', className && `${className}`].filter(Boolean).join(' ')
  return (
    //@ts-ignore
    <Nav {...props} className={classNames}>
      {children}
    </Nav>
  )
}

export default withLayout(Toolbar)
