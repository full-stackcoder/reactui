import React from 'react'
import withLayout from '../../utils/withLayout'

type CardContentProps = React.HTMLProps<HTMLDivElement> & {
  className?: string
  children?: React.ReactNode
}

const CardContent = ({ className, children, ...props }: CardContentProps) => {
  const classNames = ['fscCardContent', className ? `${className}` : ''].filter(Boolean).join(' ')

  return (
    <>
      <div {...props} className={classNames}>
        {children}
      </div>
    </>
  )
}

export default withLayout(CardContent)
