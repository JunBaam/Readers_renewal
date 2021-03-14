import React, { useCallback } from 'react'
import styled from 'styled-components'

const StarWrapper = styled.span`
  cursor: pointer;
  line-height: 0;
`

const StarRating = ({ value, inactiveColor, size, activeColor, onChange }) => {
  const stars = Array.from({ length: 5 }, () => '🟊')

  const handleChange = useCallback(value => {
    onChange(value + 1)
  })

  return (
    <>
      {stars.map((s, index) => {
        let style = inactiveColor
        if (index < value) {
          style = activeColor
        }
        return (
          <StarWrapper
            key={index}
            style={{ color: style, fontSize: size }}
            onClick={() => handleChange(index)}
          >
            {s}
          </StarWrapper>
        )
      })}

      {value}
    </>
  )
}

export default StarRating
