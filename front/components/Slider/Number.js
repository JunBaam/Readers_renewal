import React from 'react'
import sliderData from './sliderData'
import { NumberWrapper } from './styles'

const Number = props => {
  return (
    <NumberWrapper>
      {props.activeIndex + 1} / {sliderData.length}
    </NumberWrapper>
  )
}

export default Number
