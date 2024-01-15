import React from 'react'
import withLayout from '../../utils/withLayout'

type CardMediaProps = React.HTMLProps<HTMLDivElement> & {
  className?: string
  children?: React.ReactNode
}

const CardMedia = ({ className, children, ...props }: CardMediaProps) => {
  const classNames = ['fscCardMedia', className ? `${className}` : ''].filter(Boolean).join(' ')

  return (
    <>
      <div {...props} className={classNames}>
        {children}
      </div>
    </>
  )
}

export default withLayout(CardMedia)
