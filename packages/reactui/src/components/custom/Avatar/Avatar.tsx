import React from 'react'
import withLayout from '../../utils/withLayout'
import Image from '../Image/Image'

interface AvatarProps {
  className?: string
  src: string
  alt: string
  size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg'
  rounded?: boolean
}

const Avatar = ({ className, src, alt, size, rounded, ...props }: AvatarProps) => {
  const classNames = [
    'fscAvatar',
    className && `${className}`,
    size === 'xsm' && 'fscAvatar_xsmall',
    size === 'sm' && 'fscAvatar_small',
    size === 'md' && 'fscAvatar_medium',
    size === 'lg' && 'fscAvatar_large',
    size === 'xlg' && 'fscAvatar_xlarge',
    rounded && 'fscAvatar_rounded',
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <>
      <Image {...props} className={classNames} src={src} alt={alt} />
    </>
  )
}

export default withLayout(Avatar)
