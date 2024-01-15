import React from 'react'
type LayoutProps = {
  className?: string | undefined
  m?: 'xdense' | 'dense' | 'normal' | 'wide' | 'xwide' | 'uwide' | 'auto' | 'none'
  mt?: 'xdense' | 'dense' | 'normal' | 'wide' | 'xwide' | 'uwide' | 'auto' | 'none'
  mr?: 'xdense' | 'dense' | 'normal' | 'wide' | 'xwide' | 'uwide' | 'auto' | 'none'
  mb?: 'xdense' | 'dense' | 'normal' | 'wide' | 'xwide' | 'uwide' | 'auto' | 'none'
  ml?: 'xdense' | 'dense' | 'normal' | 'wide' | 'xwide' | 'uwide' | 'auto' | 'none'
  my?: 'xdense' | 'dense' | 'normal' | 'wide' | 'xwide' | 'uwide' | 'auto' | 'none'
  mx?: 'xdense' | 'dense' | 'normal' | 'wide' | 'xwide' | 'uwide' | 'auto' | 'none'
  p?: 'xdense' | 'dense' | 'normal' | 'wide' | 'xwide' | 'uwide' | 'none'
  pt?: 'xdense' | 'dense' | 'normal' | 'wide' | 'xwide' | 'uwide' | 'none'
  pr?: 'xdense' | 'dense' | 'normal' | 'wide' | 'xwide' | 'uwide' | 'none'
  pb?: 'xdense' | 'dense' | 'normal' | 'wide' | 'xwide' | 'uwide' | 'none'
  pl?: 'xdense' | 'dense' | 'normal' | 'wide' | 'xwide' | 'uwide' | 'none'
  py?: 'xdense' | 'dense' | 'normal' | 'wide' | 'xwide' | 'uwide' | 'none'
  px?: 'xdense' | 'dense' | 'normal' | 'wide' | 'xwide' | 'uwide' | 'none'
  border?: 'light' | 'dark' | 'none'
  borderTop?: 'light' | 'dark' | 'none'
  borderRight?: 'light' | 'dark' | 'none'
  borderBottom?: 'light' | 'dark' | 'none'
  borderLeft?: 'light' | 'dark' | 'none'
  borderX?: 'light' | 'dark' | 'none'
  borderY?: 'light' | 'dark' | 'none'
  centerHorizontally?: boolean
  display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'grid' | 'none'
  gridCol?: number
  gap?: 'xdense' | 'dense' | 'normal' | 'wide' | 'xwide' | 'none'
  alignItems?: 'start' | 'center' | 'end'
  justifyContent?: 'start' | 'center' | 'end' | 'space-between'
  bgColor?: 'primary' | 'secondary' | 'light' | 'dark' | 'black' | 'white' | 'red' | 'transparent' | 'none'
  position?: 'relative' | 'absolute' | 'static' | 'fixed'
  clipPath?: 'polygon' | 'none'
  cutCorners?: boolean
  elevation?: 'light' | 'normal' | 'heavy' | 'none'
  fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  fontWeight?: 'medium' | 'bold' | 'semibold'
  color?: 'primary' | 'secondary' | 'light' | 'dark' | 'black' | 'white' | 'red' | 'transparent' | 'none'
  textAlign?: 'left' | 'center' | 'right'
  textShadow?: boolean
}

const withLayout = <P extends object>(WrappedComponent: React.FC<P>) => {
  const NewComponent: React.FC<P & LayoutProps> = (props) => {
    const {
      className,
      m,
      mt,
      mr,
      mb,
      ml,
      my,
      mx,
      p,
      pt,
      pr,
      pb,
      pl,
      py,
      px,
      border,
      borderTop,
      borderRight,
      borderBottom,
      borderLeft,
      borderX,
      borderY,
      centerHorizontally,
      display,
      gridCol,
      gap,
      alignItems,
      justifyContent,
      bgColor,
      position,
      clipPath,
      cutCorners,
      elevation,
      fontSize,
      fontWeight,
      color,
      textAlign,
      textShadow,
      ...rest
    } = props

    const classNames = [
      className && `${className}`,

      m === 'xdense' && 'FSC_m__xdense',
      m === 'dense' && 'FSC_m__dense',
      m === 'normal' && 'FSC_m__normal',
      m === 'wide' && 'FSC_m__wide',
      m === 'xwide' && 'FSC_m__xwide',
      m === 'uwide' && 'FSC_m__uwide',
      m === 'auto' && 'FSC_m__auto',
      m === 'none' && 'FSC_m__none',

      mt === 'xdense' && 'FSC_mt__xdense',
      mt === 'dense' && 'FSC_mt__dense',
      mt === 'normal' && 'FSC_mt__normal',
      mt === 'wide' && 'FSC_mt__wide',
      mt === 'xwide' && 'FSC_mt__xwide',
      mt === 'uwide' && 'FSC_mt__uwide',
      mt === 'none' && 'FSC_mt__none',

      mr === 'xdense' && 'FSC_mr__xdense',
      mr === 'dense' && 'FSC_mr__dense',
      mr === 'normal' && 'FSC_mr__normal',
      mr === 'wide' && 'FSC_mr__wide',
      mr === 'xwide' && 'FSC_mr__xwide',
      mr === 'uwide' && 'FSC_mr__uwide',
      mr === 'none' && 'FSC_mr__none',

      mb === 'xdense' && 'FSC_mb__xdense',
      mb === 'dense' && 'FSC_mb__dense',
      mb === 'normal' && 'FSC_mb__normal',
      mb === 'wide' && 'FSC_mb__wide',
      mb === 'xwide' && 'FSC_mb__xwide',
      mb === 'uwide' && 'FSC_mb__uwide',
      mb === 'none' && 'FSC_mb__none',

      ml === 'xdense' && 'FSC_ml__xdense',
      ml === 'dense' && 'FSC_ml__dense',
      ml === 'normal' && 'FSC_ml__normal',
      ml === 'wide' && 'FSC_ml__wide',
      ml === 'xwide' && 'FSC_ml__xwide',
      ml === 'uwide' && 'FSC_ml__uwide',
      ml === 'none' && 'FSC_ml__none',

      my === 'xdense' && 'FSC_my__xdense',
      my === 'dense' && 'FSC_my__dense',
      my === 'normal' && 'FSC_my__normal',
      my === 'wide' && 'FSC_my__wide',
      my === 'xwide' && 'FSC_my__xwide',
      my === 'uwide' && 'FSC_my__uwide',
      my === 'none' && 'FSC_my__none',

      mx === 'xdense' && 'FSC_mx__xdense',
      mx === 'dense' && 'FSC_mx__dense',
      mx === 'normal' && 'FSC_mx__normal',
      mx === 'wide' && 'FSC_mx__wide',
      mx === 'xwide' && 'FSC_mx__xwide',
      mx === 'uwide' && 'FSC_mx__uwide',
      mx === 'none' && 'FSC_mx__none',

      p === 'xdense' && 'FSC_p__xdense',
      p === 'dense' && 'FSC_p__dense',
      p === 'normal' && 'FSC_p__normal',
      p === 'wide' && 'FSC_p__wide',
      p === 'xwide' && 'FSC_p__xwide',
      p === 'uwide' && 'FSC_p__uwide',
      p === 'none' && 'FSC_p__none',

      pt === 'xdense' && 'FSC_pt__xdense',
      pt === 'dense' && 'FSC_pt__dense',
      pt === 'normal' && 'FSC_pt__normal',
      pt === 'wide' && 'FSC_pt__wide',
      pt === 'xwide' && 'FSC_pt__xwide',
      pt === 'uwide' && 'FSC_pt__uwide',
      pt === 'none' && 'FSC_pt__none',

      pr === 'xdense' && 'FSC_pr__xdense',
      pr === 'dense' && 'FSC_pr__dense',
      pr === 'normal' && 'FSC_pr__normal',
      pr === 'wide' && 'FSC_pr__wide',
      pr === 'xwide' && 'FSC_pr__xwide',
      pr === 'uwide' && 'FSC_pr__uwide',
      pr === 'none' && 'FSC_pr__none',

      pb === 'xdense' && 'FSC_pb__xdense',
      pb === 'dense' && 'FSC_pb__dense',
      pb === 'normal' && 'FSC_pb__normal',
      pb === 'wide' && 'FSC_pb__wide',
      pb === 'xwide' && 'FSC_pb__xwide',
      pb === 'uwide' && 'FSC_pb__uwide',
      pb === 'none' && 'FSC_pb__none',

      pl === 'xdense' && 'FSC_pl__xdense',
      pl === 'dense' && 'FSC_pl__dense',
      pl === 'normal' && 'FSC_pl__normal',
      pl === 'wide' && 'FSC_pl__wide',
      pl === 'xwide' && 'FSC_pl__xwide',
      pl === 'uwide' && 'FSC_pl__uwide',
      pl === 'none' && 'FSC_pl__none',

      py === 'xdense' && 'FSC_py__xdense',
      py === 'dense' && 'FSC_py__dense',
      py === 'normal' && 'FSC_py__normal',
      py === 'wide' && 'FSC_py__wide',
      py === 'xwide' && 'FSC_py__xwide',
      py === 'uwide' && 'FSC_py__uwide',
      py === 'none' && 'FSC_py__none',

      px === 'xdense' && 'FSC_px__xdense',
      px === 'dense' && 'FSC_px__dense',
      px === 'normal' && 'FSC_px__normal',
      px === 'wide' && 'FSC_px__wide',
      px === 'xwide' && 'FSC_px__xwide',
      px === 'uwide' && 'FSC_px__uwide',
      px === 'none' && 'FSC_px__none',

      border === 'light' && 'FSC_border___light',
      border === 'dark' && 'FSC_border___dark',
      border === 'none' && 'FSC_border___none',

      borderTop === 'light' && 'FSC_border__top___light',
      borderTop === 'dark' && 'FSC_border__top___dark',
      borderTop === 'none' && 'FSC_border__top___none',

      borderRight === 'light' && 'FSC_border__right___light',
      borderRight === 'dark' && 'FSC_border__right___dark',
      borderRight === 'none' && 'FSC_border__right___none',

      borderBottom === 'light' && 'FSC_border__bottom___light',
      borderBottom === 'dark' && 'FSC_border__bottom___dark',
      borderBottom === 'none' && 'FSC_border__bottom___none',

      borderLeft === 'light' && 'FSC_border__left___light',
      borderLeft === 'dark' && 'FSC_border__left___dark',
      borderLeft === 'none' && 'FSC_border__left___none',

      borderX === 'light' && 'FSC_border__x___light',
      borderX === 'dark' && 'FSC_border__x___dark',
      borderX === 'none' && 'FSC_border__x___none',

      borderY === 'light' && 'FSC_border__y___light',
      borderY === 'dark' && 'FSC_border__y___dark',
      borderY === 'none' && 'FSC_border__y___none',

      centerHorizontally && 'FSC_centerHorizontally',

      display === 'block' && 'FSC_display__block',
      display === 'inline' && 'FSC_display__inline',
      display === 'inline-block' && 'FSC_display__inlineBlock',
      display === 'flex' && 'FSC_display__flex',
      display === 'grid' && 'FSC_display__grid',
      display === 'none' && 'FSC_display__none',

      gridCol === 1 && 'FSC_gridCol__1',
      gridCol === 2 && 'FSC_gridCol__2',
      gridCol === 3 && 'FSC_gridCol__3',
      gridCol === 4 && 'FSC_gridCol__4',
      gridCol === 5 && 'FSC_gridCol__5',
      gridCol === 6 && 'FSC_gridCol__6',
      gridCol === 7 && 'FSC_gridCol__7',
      gridCol === 8 && 'FSC_gridCol__8',
      gridCol === 9 && 'FSC_gridCol__9',
      gridCol === 10 && 'FSC_gridCol__10',
      gridCol === 11 && 'FSC_gridCol__11',
      gridCol === 12 && 'FSC_gridCol__12',

      gap === 'xdense' && 'FSC_gap__xdense',
      gap === 'dense' && 'FSC_gap__dense',
      gap === 'normal' && 'FSC_gap__normal',
      gap === 'wide' && 'FSC_gap__wide',
      gap === 'xwide' && 'FSC_gap__xwide',
      gap === 'none' && 'FSC_gap__none',

      alignItems === 'start' && 'FSC_alignItems__start',
      alignItems === 'center' && 'FSC_alignItems__center',
      alignItems === 'end' && 'FSC_alignItems__end',

      justifyContent && justifyContent === 'start' && `FSC_justifyContent__start`,
      justifyContent && justifyContent === 'center' && 'FSC_justifyContent__center',
      justifyContent && justifyContent === 'end' && 'FSC_justifyContent__end',
      justifyContent && justifyContent === 'space-between' && 'FSC_justifyContent__spaceBetween',

      bgColor === 'primary' && 'FSC_bgColor__primary',
      bgColor === 'secondary' && 'FSC_bgColor__secondary',
      bgColor === 'light' && 'FSC_bgColor__light',
      bgColor === 'dark' && 'FSC_bgColor__dark',
      bgColor === 'black' && 'FSC_bgColor__black',
      bgColor === 'white' && 'FSC_bgColor__white',
      bgColor === 'red' && 'FSC_bgColor__red',
      bgColor === 'transparent' && 'FSC_bgColor__transparent',
      bgColor === 'none' && 'FSC_bgColor__none',

      position === 'relative' && 'FSC_position__relative',
      position === 'absolute' && 'FSC_position__absolute',
      position === 'static' && 'FSC_position__static',
      position === 'fixed' && 'FSC_position__fixed',

      clipPath === 'polygon' && 'FSC_clipPath__polygon',
      clipPath === 'none' && 'FSC_clipPath__none',

      cutCorners && 'FSC_cutCorners',

      elevation === 'light' && 'FSC_elevation__light',
      elevation === 'normal' && 'FSC_elevation__normal',
      elevation === 'heavy' && 'FSC_elevation__heavy',
      elevation === 'none' && 'FSC_elevation__none',

      fontSize === 'xs' && 'FSC_fontSize__xs',
      fontSize === 'sm' && 'FSC_fontSize__sm',
      fontSize === 'md' && 'FSC_fontSize__md',
      fontSize === 'lg' && 'FSC_fontSize__lg',
      fontSize === 'xl' && 'FSC_fontSize__xl',

      fontWeight === 'medium' && 'FSC_fontWeight__medium',
      fontWeight === 'semibold' && 'FSC_fontWeight__semibold',
      fontWeight === 'bold' && 'FSC_fontWeight__bold',

      color === 'primary' && 'FSC_color__primary',
      color === 'secondary' && 'FSC_color__secondary',
      color === 'light' && 'FSC_color__light',
      color === 'dark' && 'FSC_color__dark',
      color === 'black' && 'FSC_color__black',
      color === 'white' && 'FSC_color__white',
      color === 'red' && 'FSC_color__red',
      color === 'transparent' && 'FSC_color__transparent',
      color === 'none' && 'FSC_color__none',

      textAlign === 'left' && 'FSC_textAlign__left',
      textAlign === 'center' && 'FSC_textAlign__center',
      textAlign === 'right' && 'FSC_textAlign__right',

      textShadow && 'FSC_textShadow',
    ]
      .filter(Boolean)
      .join(' ')
    return <WrappedComponent {...(rest as P)} className={classNames} />
  }
  return NewComponent
}

export default withLayout
