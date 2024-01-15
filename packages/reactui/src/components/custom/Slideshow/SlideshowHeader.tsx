import React from 'react'
import withLayout from '../../utils/withLayout'
import Box from '../Box/Box'

interface SlideshowHeaderProps {
  className?: string
  children: React.ReactNode
}

const SlideshowHeader = ({ className, children, ...props }: SlideshowHeaderProps) => {
  const classNames = ['fscSlideshowHeader', className ? `${className}` : ''].filter(Boolean).join(' ')

  return (
    <>
      <Box {...props} className={classNames}>
        {children}
      </Box>
    </>
  )
}

export default withLayout(SlideshowHeader)
