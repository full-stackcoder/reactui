import React from 'react'
import withLayout from '../../utils/withLayout'

type SectionProps = React.HTMLProps<HTMLElement> & {
  className?: string
  children: React.ReactNode
}

const Section = ({ className, children, ...props }: SectionProps) => {
  const classNames = ['fscSection', className && `${className}`].filter(Boolean).join(' ')
  return (
    <section {...props} className={classNames}>
      {children}
    </section>
  )
}

export default withLayout(Section)
