import React, { ReactNode } from 'react'
import withRipple from '../../utils/withRipple'
import withLayout from '../../utils/withLayout'
import Anchor from '../Anchor/Anchor'

type LinkProps = React.HTMLProps<HTMLAnchorElement> & {
  className?: string
  variant?: 'contained' | 'outlined' | 'transparent' | 'text' | 'inline' | 'regular'
  text?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}

const Link = ({ className, variant, text, startAdornment, endAdornment, ...props }: LinkProps) => {
  const classNames = [
    'fscLink',
    variant === 'contained' && 'fscLink_contained',
    variant === 'outlined' && 'fscLink_outlined',
    variant === 'transparent' && 'fscLink_transparent',
    variant === 'text' && 'fscLink_text',
    variant === 'inline' && 'fscLink_inline',
    variant === 'regular' && 'fscLink_regular',
    className && `${className}`,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    //@ts-ignore
    <Anchor {...props} className={classNames}>
      {startAdornment}
      {text}
      {endAdornment}
    </Anchor>
  )
}

export default withLayout(withRipple(Link))
