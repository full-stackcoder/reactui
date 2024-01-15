import React from 'react'
import IconProps from '../../../utils/iconTypes'
import withLayout from '../../utils/withLayout'

const AnimatedLoadingIcon = ({ fill, stroke, className, ...props }: IconProps) => {
  const classNames = ['fscAnimatedLoadingIcon', className && `${className}`].filter(Boolean).join(' ')
  return (
    <svg
      {...props}
      className={classNames}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 50 50'
      preserveAspectRatio='xMidYMid'
      height='20'
      width='20'
    >
      <title>Animated Loading Icon</title>
      <metadata>Created by Prashan Pudasaini on Thursday, January 4th, 2024 @ fullstackcoder.io</metadata>
      <circle
        cx='25'
        cy='25'
        fill={fill}
        stroke={stroke}
        strokeWidth='3'
        r='15'
        strokeDasharray='47.123889803846895 16.041189668484067'
      >
        <animateTransform
          attributeName='transform'
          type='rotate'
          repeatCount='indefinite'
          dur='1s'
          values='0 25 25;360 25 25'
          keyTimes='0;1'
        ></animateTransform>
      </circle>
    </svg>
  )
}

export default withLayout(AnimatedLoadingIcon)
