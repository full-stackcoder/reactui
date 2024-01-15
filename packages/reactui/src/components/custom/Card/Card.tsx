import React from 'react'
import withLayout from '../../utils/withLayout'

type CardProps = React.HTMLProps<HTMLDivElement> & {
  className?: string
  children?: React.ReactNode
}

const Card = ({ className, children, ...props }: CardProps) => {
  const classNames = ['fscCard', className ? `${className}` : ''].filter(Boolean).join(' ')

  return (
    <>
      <div {...props} className={classNames}>
        {children}
      </div>
    </>
  )
}

export default withLayout(Card)
