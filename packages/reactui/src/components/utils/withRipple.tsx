import React, { useState, useEffect, useRef } from 'react'

type RippleProps = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  className?: string
}

const withRipple = <P extends object>(OriginalComponent: React.ComponentType<P>) => {
  const NewComponent: React.FC<P & RippleProps> = (props) => {
    const { className } = props
    const [ripple, setRipple] = useState(false)
    const isMountedRef = useRef(false)

    useEffect(() => {
      isMountedRef.current = true
      const button = document.querySelector('.FSC_ripple')
      button?.addEventListener('transitionend', handleTransitionEnd)
      return () => {
        isMountedRef.current = false
        button?.removeEventListener('transitionend', handleTransitionEnd)
      }
    }, [])

    const handleTransitionEnd = () => {
      if (isMountedRef.current) {
        setRipple(false)
      }
    }

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      if (props.onClick) {
        props.onClick(e)
      }
      setRipple(true)
    }

    const classNames = ['FSC_ripple', ripple && 'FSC_isRippling', className && `${className}`].filter(Boolean).join(' ')
    return <OriginalComponent {...props} className={classNames} onClick={handleClick} />
  }

  return NewComponent
}

export default withRipple
