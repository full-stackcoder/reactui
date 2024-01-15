import React, { ReactNode } from 'react'
import withRipple from '../../utils/withRipple'
import withLayout from '../../utils/withLayout'

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  className?: string
  variant?: 'navButton' | 'iconButton' | 'contained'
  text?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ className, variant, text, startAdornment, endAdornment, disabled, type, ...props }: ButtonProps) => {
  const classNames = [
    'fscButton',
    className && `${className}`,
    variant === 'navButton' && 'fscButton_navButton',
    variant === 'iconButton' && 'fscButton_iconButton',
    variant === 'contained' && 'fscButton_contained',
    disabled && 'fscButton_disabled',
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <button {...props} type={type} disabled={disabled} className={classNames} suppressHydrationWarning={true}>
      {startAdornment}
      {text}
      {endAdornment}
    </button>
  )
}

export default withLayout(withRipple(Button))
