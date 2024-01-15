import React from 'react'
import IconProps from '../../../utils/iconTypes'
import withLayout from '../../utils/withLayout'

const KotlinIcon = ({ className, ...props }: IconProps) => {
  const classNames = ['fscKotlinIcon', className && `${className}`].filter(Boolean).join(' ')
  return (
    <svg {...props} className={classNames} xmlns='http://www.w3.org/2000/svg' viewBox='-600 -500 3700 3700'>
      <title>Kotlin Icon</title>
      <metadata>Created by Prashan Pudasaini on Thursday, January 4th, 2024 @ fullstackcoder.io</metadata>
      <radialGradient
        id='a'
        cx='2329.27'
        cy='2305.82'
        gradientTransform='matrix(1.09 0 0 -1.09 -110.8 2605.56)'
        gradientUnits='userSpaceOnUse'
        r='2638.25'
      >
        <stop offset='0' stopColor='#e44857' />
        <stop offset='.47' stopColor='#c711e1' />
        <stop offset='1' stopColor='#7f52ff' />
      </radialGradient>
      <path d='M2501.34 2500H0V0h2501.34L1224.87 1231.44z' fill='url(#a)' />
    </svg>
  )
}

export default withLayout(KotlinIcon)
