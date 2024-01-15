import React from 'react'
import withLayout from '../../utils/withLayout'

type UnorderedListProps = React.HTMLProps<HTMLUListElement> & {
  className?: string
  children: React.ReactNode
}

const UnorderedList = ({ className, children, ...props }: UnorderedListProps) => {
  const classNames = ['fscUnorderedList', className && `${className}`].filter(Boolean).join(' ')
  return (
    <ul {...props} className={classNames}>
      {children}
    </ul>
  )
}

export default withLayout(UnorderedList)
