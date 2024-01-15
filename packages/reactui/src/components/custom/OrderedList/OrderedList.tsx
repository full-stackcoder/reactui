import React from 'react'
import withLayout from '../../utils/withLayout'

type OrderedListProps = React.HTMLProps<HTMLOListElement> & {
  className?: string
  children: React.ReactNode
}

const OrderedList = ({ className, children, ...props }: OrderedListProps) => {
  const classNames = ['fscOrderedList', className && `${className}`].filter(Boolean).join(' ')
  return (
    //@ts-ignore
    <ol {...{ ...props }} className={classNames}>
      {children}
    </ol>
  )
}

export default withLayout(OrderedList)
