import React, { useState, useEffect } from 'react'
import Nav from '../Nav/Nav'
import withLayout from '../../utils/withLayout'

type AppbarProps = React.HTMLProps<HTMLElement> & {
  className?: string
  children?: React.ReactNode
  sticky?: boolean
}

const Appbar = ({ className, children, sticky, ...props }: AppbarProps) => {
  const [stayOnTop, setstayOnTop] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset >= 56) {
      setstayOnTop(true)
    } else {
      setstayOnTop(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const classNames = [
    'fscAppbar',
    className ? `${className}` : '',
    sticky && stayOnTop ? 'fscAppbar_stayOnTop' : 'fscAppbar_static',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      {/* @ts-ignore */}
      <Nav {...props} className={classNames}>
        {children}
      </Nav>
    </>
  )
}

export default withLayout(Appbar)
