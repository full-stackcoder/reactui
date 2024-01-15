import React from 'react'
import withLayout from '../../utils/withLayout'
import Box from '../Box/Box'

interface SlideshowMediaProps {
  className?: string
  children: React.ReactNode
}

const SlideshowMedia = ({ className, children, ...props }: SlideshowMediaProps) => {
  const classNames = ['fscSlideshowMedia', className ? `${className}` : ''].filter(Boolean).join(' ')

  return (
    <>
      <Box {...props} className={classNames}>
        {children}
      </Box>
    </>
  )
}

export default withLayout(SlideshowMedia)
