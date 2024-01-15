import React from 'react'
import withLayout from '../../utils/withLayout'
import Box from '../Box/Box'

interface SlideshowFooterProps {
  className?: string
  children: React.ReactNode
}

const SlideshowFooter = ({ className, children, ...props }: SlideshowFooterProps) => {
  const classNames = ['fscSlideshowFooter', className ? `${className}` : ''].filter(Boolean).join(' ')

  return (
    <>
      <Box {...props} className={classNames}>
        {children}
      </Box>
    </>
  )
}

export default withLayout(SlideshowFooter)
