import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

import { LeftArrows, RightArrows, ArrowWarpper } from './styles'
const Arrows = props => {
  return (
    <ArrowWarpper>
      <LeftArrows onClick={props.prevSlide}>
        <FaArrowAltCircleLeft />
      </LeftArrows>
      <RightArrows onClick={props.nextSlide}>
        <FaArrowAltCircleRight />
      </RightArrows>
    </ArrowWarpper>
  )
}

export default Arrows
