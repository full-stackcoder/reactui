import React from 'react'
import Box from '../Box/Box'
import withLayout from '../../utils/withLayout'

type ContainerProps = React.HTMLProps<HTMLDivElement> & {
  className?: string
  children: React.ReactNode
}

const Container = ({ className, children, ...props }: ContainerProps) => {
  const classNames = ['fscContainer', className && `${className}`].filter(Boolean).join(' ')
  return (
    //@ts-ignore
    <Box {...props} className={classNames} centerHorizontally py='uwide'>
      {children}
    </Box>
  )
}

export default withLayout(Container)
