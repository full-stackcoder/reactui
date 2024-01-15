import React from 'react'
import withLayout from '../../utils/withLayout'

type BoxProps = React.HTMLProps<HTMLDivElement> & {
  className?: string
  children: React.ReactNode
}

const Box = ({ className, children, ...props }: BoxProps) => {
  const classNames = ['fscBox', className && `${className}`].filter(Boolean).join(' ')
  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  )
}

export default withLayout(Box)
