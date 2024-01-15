import React from 'react'
import withLayout from '../../utils/withLayout'

type CardFooterProps = React.HTMLProps<HTMLDivElement> & {
  className?: string
  children?: React.ReactNode
}

const CardFooter = ({ className, children, ...props }: CardFooterProps) => {
  const classNames = ['fscCardFooter', className ? `${className}` : ''].filter(Boolean).join(' ')

  return (
    <>
      <div {...props} className={classNames}>
        {children}
      </div>
    </>
  )
}

export default withLayout(CardFooter)
