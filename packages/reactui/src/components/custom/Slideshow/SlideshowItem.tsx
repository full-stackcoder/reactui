import React from 'react'
import withLayout from '../../utils/withLayout'
import Box from '../Box/Box'

interface SlideshowItemProps {
  className?: string
  children: React.ReactNode
}

const SlideshowItem = ({ className, children, ...props }: SlideshowItemProps) => {
  const classNames = ['fscSlideshowItem', className ? `${className}` : ''].filter(Boolean).join(' ')

  return (
    <>
      <Box {...props} className={classNames}>
        {children}
      </Box>
    </>
  )
}

export default withLayout(SlideshowItem)
