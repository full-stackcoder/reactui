import React, { ReactNode } from 'react'
import withLayout from '../../utils/withLayout'
import Box from '../Box/Box'

type CurtainProps = React.HTMLProps<HTMLDivElement> & {
  className?: string
  children: ReactNode
}

const Curtain = ({ className, children, ...props }: CurtainProps) => {
  const classNames = ['fscCurtain', className && `${className}`].filter(Boolean).join(' ')
  return (
    //@ts-ignore
    <Box {...props} className={classNames}>
      {children}
    </Box>
  )
}

export default withLayout(Curtain)
