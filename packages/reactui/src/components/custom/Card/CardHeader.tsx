import React from 'react'
import withLayout from '../../utils/withLayout'

type CardHeaderProps = React.HTMLProps<HTMLDivElement> & {
  className?: string
  children?: React.ReactNode
}

const CardHeader = ({ className, children, ...props }: CardHeaderProps) => {
  const classNames = ['fscCardHeader', className ? `${className}` : ''].filter(Boolean).join(' ')

  return (
    <>
      <div {...props} className={classNames}>
        {children}
      </div>
    </>
  )
}

export default withLayout(CardHeader)
