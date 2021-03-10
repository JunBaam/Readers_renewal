import React, { useCallback } from 'react'
import styled from 'styled-components'

const StarWrapper = styled.span`
  cursor: pointer;

  width: 40px;
  margin: 0px 0 10px 20px;
`

const StarRating = ({ value, inactiveColor, size, activeColor, onChange }) => {
  const stars = Array.from({ length: 5 }, () => '🟊')

  const handleChange = useCallback(value => {
    onChange(value + 1)
  })

  return (
    <StarWrapper>
      {stars.map((s, index) => {
        let style = inactiveColor
        if (index < value) {
          style = activeColor
        }
        return (
          <span
            key={index}
            style={{ color: style, fontSize: size }}
            onClick={() => handleChange(index)}
          >
            {s}
          </span>
        )
      })}

      {value}
    </StarWrapper>
  )
}

export default StarRating
