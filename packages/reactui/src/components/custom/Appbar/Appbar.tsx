import React, { useState, useEffect } from 'react'

import Box from '../Box/Box'
import Nav from '../Nav/Nav'

import useMediaQuery from '../../utils/useMediaQuery'
import withLayout from '../../utils/withLayout'

type AppbarProps = React.HTMLProps<HTMLElement> & {
  className?: string
  children?: React.ReactNode
  sticky?: boolean
  mobileLogo?: React.ReactNode
  mobileMenuIcon?: React.ReactNode
  mobileMenuCloseIcon?: React.ReactNode
  mobileAppbarItem?: React.ReactNode
  mobileMenuItems?: React.ReactNode
  mobileMenuItemsAction?: React.ReactNode
}

const Appbar = ({
  className,
  children,
  sticky,
  mobileLogo,
  mobileMenuIcon,
  mobileMenuCloseIcon,
  mobileAppbarItem,
  mobileMenuItems,
  mobileMenuItemsAction,
  ...props
}: AppbarProps) => {
  const isSmScreen = useMediaQuery({
    query: { media: '(max-width: 768px)' },
  })

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
  const [stayOnTop, setstayOnTop] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset >= 56) {
      setstayOnTop(true)
    } else {
      setstayOnTop(false)
    }
  }

  const handleMenuToggle = () => {
    setMobileMenuVisible(!mobileMenuVisible)
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
      {isSmScreen ? (
        <>
          {/* @ts-ignore */}
          <Nav {...props} className={classNames} display='flex' justifyContent='space-between' py='dense'>
            <Box>{mobileLogo}</Box>
            {mobileMenuVisible ? (
              <>
                <Box display='flex' gap='dense'>
                  <Box>{mobileAppbarItem}</Box>
                  <Box onClick={handleMenuToggle}>{mobileMenuCloseIcon}</Box>
                </Box>
                <Nav className='fscAppbar_mobileMenu' position='absolute' mt='normal'>
                  {mobileMenuItems}
                  <Box display='flex' justifyContent='space-between' p='dense'>
                    {mobileMenuItemsAction}
                  </Box>
                </Nav>
              </>
            ) : (
              <>
                <Box onClick={handleMenuToggle}>{mobileMenuIcon} </Box>
              </>
            )}
          </Nav>
        </>
      ) : (
        /* @ts-ignore */
        <Nav {...props} className={classNames} pb='dense'>
          {children}
        </Nav>
      )}
    </>
  )
}

export default withLayout(Appbar)
