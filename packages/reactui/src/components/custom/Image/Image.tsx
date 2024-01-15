import React from 'react'
import withLayout from '../../utils/withLayout'

type ImageProps = React.HTMLProps<HTMLImageElement> & {
  className?: string
  src?: string
  alt?: string
  darker?: boolean
}

const Image = ({ className, src, alt, darker, ...props }: ImageProps) => {
  const classNames = ['fscImage', className && `${className}`, darker && 'fscImage_darker'].filter(Boolean).join(' ')
  return <img {...props} className={classNames} src={src} alt={alt} />
}

export default withLayout(Image)
