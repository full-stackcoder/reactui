import React from 'react'
import withLayout from '../../utils/withLayout'

type AnchorProps = React.HTMLProps<HTMLAnchorElement> & {
  className?: string
  children: React.ReactNode
}

const Anchor = ({ className, children, ...props }: AnchorProps) => {
  const classNames = ['fscAnchor', className && `${className}`].filter(Boolean).join(' ')
  return (
    <a {...props} className={classNames}>
      {children}
    </a>
  )
}

export default withLayout(Anchor)
