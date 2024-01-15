import React from 'react'
import withLayout from '../../utils/withLayout'

type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  className?: string
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'small'
  children: React.ReactNode
}

const Typography = ({
  className,
  variant,

  children,
  ...props
}: TypographyProps) => {
  const classNames = ['fscTypography', className && `${className}`].filter(Boolean).join(' ')

  return (
    <>
      {variant === 'h1' ? (
        <h1 {...props} className={classNames}>
          {children}
        </h1>
      ) : variant === 'h2' ? (
        <h2 {...props} className={classNames}>
          {children}
        </h2>
      ) : variant === 'h3' ? (
        <h3 {...props} className={classNames}>
          {children}
        </h3>
      ) : variant === 'h4' ? (
        <h4 {...props} className={classNames}>
          {children}
        </h4>
      ) : variant === 'h5' ? (
        <h5 {...props} className={classNames}>
          {children}
        </h5>
      ) : variant === 'h6' ? (
        <h6 {...props} className={classNames}>
          {children}
        </h6>
      ) : variant === 'small' ? (
        <small {...props} className={classNames}>
          {children}
        </small>
      ) : (
        <p {...props} className={classNames}>
          {children}
        </p>
      )}
    </>
  )
}

export default withLayout(Typography)
