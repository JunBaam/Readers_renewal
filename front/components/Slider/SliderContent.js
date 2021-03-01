import React from 'react'
import sliderData from './sliderData'
import { SlideInfo, SlideActive, SlideText } from './styles'

const SliderContent = props => {
  return (
    <>
      {sliderData.map((slide, index) => (
        <SlideActive
          key={index}
          active={index === props.activeIndex ? 'active' : 'inactive'}
        >
          <SlideInfo>
            <img src={slide.urls} alt="image_slider" />
            <SlideText>
              <h2>{slide.title}</h2>
              <h5 category>{slide.category}</h5>
              <div contents>{slide.contents}</div>
            </SlideText>
          </SlideInfo>
        </SlideActive>
      ))}
    </>
  )
}

export default SliderContent
