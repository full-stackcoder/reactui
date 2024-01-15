import React from 'react'
import withLayout from '../../utils/withLayout'

type FormProps = React.HTMLProps<HTMLFormElement> & {
  className?: string
  children: React.ReactNode
}

const Form = ({ className, children, ...props }: FormProps) => {
  const classNames = ['fscForm', className && `${className}`].filter(Boolean).join(' ')
  return (
    <form {...props} className={classNames}>
      {children}
    </form>
  )
}

export default withLayout(Form)
