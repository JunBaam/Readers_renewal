import React from 'react'
import styled, { css } from 'styled-components'

const ButtonWrapper = styled.button`
  /* border-radius: 20px; */
  font-size: 15px;
  font-weight: bold;
  padding: 0.25rem 1rem;

  outline: none;
  cursor: pointer;
  border: none;
  background-color: #ffd5b4;
  color: white;
  text-align: center;

  height: 40px;

  border-radius: 5px;

  ${props =>
    props.size === 'large' &&
    css`
      width: 334px;
    `}

  ${props =>
    props.size === 'mid' &&
    css`
      width: 200px;
    `}
  :hover {
    color: white;
    background-color: #ff9e7d;
    transition: all 0.4s ease-in-out;
  }
`

function Button({ children, size }) {
  return <ButtonWrapper size={size}>{children}</ButtonWrapper>
}

export default Button
