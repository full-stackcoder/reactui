import React, { useState, useEffect } from 'react'

import Box from '../Box/Box'
import Button from '../Button/Button'

import { LeftArrowOutlinedIcon } from '../../icons/interface_icons/LeftArrowIcon'
import { RightArrowOutlinedIcon } from '../../icons/interface_icons/RightArrowIcon'
import { SquareFilledIcon } from '../../icons/interface_icons/SquareIcon'

import useMediaQuery from '../../utils/useMediaQuery'
import withLayout from '../../utils/withLayout'

interface SlideshowProps {
  className?: string
  children: React.ReactNode[]
  variant: 'detailed' | 'brief'
  data: React.ReactNode[]
}

const Slideshow = ({ className, children, variant, data, ...props }: SlideshowProps) => {
  const isSmScreen = useMediaQuery({
    query: { media: '(max-width: 768px)' },
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children ? children.length : 0)
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touchDown = event.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    const currentTouch = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const diff = touchDown - currentTouch;
    if (diff > 5) {
      next();
    }
    if (diff < -5) {
      prev();
    }
    setTouchPosition(null);
  }

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  const getExact = (count: number) => {
    setCurrentIndex(count)
  }

  useEffect(() => {
    setLength(children ? children.length : 0)
  }, [children])

  const classNames = ['fscSlideshow', className ? `${className}` : ''].filter(Boolean).join(' ')

  return (
    <>
      <Box {...props} className={classNames} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        <Box display='flex' className='fscSlideshow_swipe' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {children}          
        </Box>

        {/* Nav buttons */}
        <Box
          display='flex'
          justifyContent={isSmScreen || variant === 'brief' ? 'center' : 'start'}
          mt={variant === 'brief' ? 'none' : 'xdense'}
        >
          <Box display='flex' alignItems='center' gap='xdense' justifyContent='center'>
            <Button
              type='button'
              onClick={prev}
              disabled={currentIndex > 0 ? false : true}
              variant='iconButton'
              startAdornment={
                <LeftArrowOutlinedIcon fill={currentIndex > 0 ? '#5a6b31' : '#8e8e8e'} height='3rem' width='3rem' />
              }
            />

            {data?.map((obj, index) => (
              <Button
                type='button'
                key={index}
                //@ts-ignore
                onClick={() => getExact(obj.count)}
                variant='navButton'
                //@ts-ignore
                disabled={currentIndex === obj.count ? true : false}
                startAdornment={
                  <SquareFilledIcon
                    //@ts-ignore
                    fill={currentIndex === obj.count ? '#8e8e8e' : '#5a6b31'}
                    height='0.5rem'
                    width='1rem'
                  />
                }
              />
            ))}

            <Button
              type='button'
              onClick={next}
              disabled={currentIndex < length - 1 ? false : true}
              variant='iconButton'
              startAdornment={
                <RightArrowOutlinedIcon
                  fill={currentIndex < length - 1 ? '#5a6b31' : '#8e8e8e'}
                  height='3rem'
                  width='3rem'
                />
              }
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default withLayout(Slideshow)
