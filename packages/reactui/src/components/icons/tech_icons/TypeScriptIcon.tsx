import React from 'react'
import IconProps from '../../../utils/iconTypes'
import withLayout from '../../utils/withLayout'

const TypeScriptIcon = ({ className, ...props }: IconProps) => {
  const classNames = ['fscTypeScriptIcon', className && `${className}`].filter(Boolean).join(' ')
  return (
    <svg {...props} className={classNames} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'>
      <title>TypeScript Icon</title>
      <metadata>Created by Prashan Pudasaini on Thursday, January 7th, 2024 @ fullstackcoder.io</metadata>
      <text
        x='50%'
        y='50%'
        fontSize='150'
        fill='#3178C6'
        textAnchor='middle'
        dominantBaseline='middle'
        fontFamily='Helvetica Neue'
      >
        TS
      </text>
    </svg>
  )
}

export default withLayout(TypeScriptIcon)
