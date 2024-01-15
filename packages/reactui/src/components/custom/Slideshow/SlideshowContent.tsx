import React from 'react'
import withLayout from '../../utils/withLayout'
import Box from '../Box/Box'

interface SlideshowContentProps {
  className?: string
  children: React.ReactNode
}

const SlideshowContent = ({ className, children, ...props }: SlideshowContentProps) => {
  const classNames = ['fscSlideshowContent', className ? `${className}` : ''].filter(Boolean).join(' ')

  return (
    <>
      <Box {...props} className={classNames}>
        {children}
      </Box>
    </>
  )
}

export default withLayout(SlideshowContent)
