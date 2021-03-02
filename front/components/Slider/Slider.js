import React, { useState, useEffect } from 'react'
import sliderData from './sliderData'
import Arrows from './Arrows'
import SliderContent from './SliderContent'
import Number from './Number'

import { SlideContainer } from './styles'

const Slider = () => {
  const len = sliderData.length - 1
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <SlideContainer>
      <SliderContent activeIndex={activeIndex} />

      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />

      <Number activeIndex={activeIndex} />
    </SlideContainer>
  )
}

export default Slider
