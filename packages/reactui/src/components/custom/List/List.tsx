import React from 'react'
import withLayout from '../../utils/withLayout'

type ListProps = React.HTMLProps<HTMLLIElement> & {
  className?: string
  listStyle?: 'square' | 'inside' | 'none'
  children: React.ReactNode
}

const List = ({ className, listStyle, children, ...props }: ListProps) => {
  const classNames = [
    'fscList',
    className && `${className}`,
    listStyle === 'none' && 'fscList_listStyle__none',
    listStyle === 'square' && 'fscList_listStyle__square',
    listStyle === 'inside' && 'fscList_listStyle__inside',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <li {...props} className={classNames}>
      {children}
    </li>
  )
}

export default withLayout(List)
