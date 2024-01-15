import React from 'react'
import IconProps from '../../../utils/iconTypes'
import withLayout from '../../utils/withLayout'

const OutlinedIcon = ({ fill, className, ...props }: IconProps) => {
  const classNames = ['fscMenu_outlinedIcon', className && `${className}`].filter(Boolean).join(' ')
  return (
    <svg
      {...props}
      className={classNames}
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 900.000000 900.000000'
      preserveAspectRatio='xMidYMid meet'
    >
      <title>Menu Outlined Icon</title>
      <metadata>Created by Prashan Pudasaini on Thursday, January 4th, 2024 @ fullstackcoder.io</metadata>
      <g transform='translate(0.000000,900.000000) scale(0.100000,-0.100000)' fill={fill} stroke='none'>
        <path d='M512 6928 c-54 -24 -114 -84 -143 -140 -28 -55 -30 -177 -4 -228 43 -84 90 -126 175 -157 52 -19 7848 -19 7900 0 85 31 132 73 175 157 26 51 24 173 -4 228 -30 58 -90 116 -146 141 l-48 21 -3931 -1 c-3898 -1 -3931 -1 -3974 -21z' />
        <path d='M4451 4678 c-24 -11 -63 -39 -86 -63 -116 -115 -114 -277 4 -395 87 -87 -104 -80 2093 -80 2040 0 1963 -1 2044 43 35 18 81 72 109 127 26 51 24 173 -4 228 -30 58 -90 116 -146 141 l-48 21 -1961 -1 c-1940 -1 -1961 -1 -2005 -21z' />
        <path d='M4451 2428 c-24 -11 -63 -39 -86 -63 -116 -115 -114 -277 4 -395 87 -87 -104 -80 2093 -80 2040 0 1963 -1 2044 43 35 18 81 72 109 127 26 51 24 173 -4 228 -30 58 -90 116 -146 141 l-48 21 -1961 -1 c-1940 -1 -1961 -1 -2005 -21z' />
      </g>
    </svg>
  )
}

const MenuOutlinedIcon = withLayout(OutlinedIcon)

export { MenuOutlinedIcon }
