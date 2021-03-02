import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  border: none;
  border-radius: 20px;
  font-size: 15px;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background-color: #ffd5b4;
  text-align: center;
  width: 200px;
  height: 40px;

  margin-top: 15px;

  :hover {
    background-color: #ff9e7d;
    transition: all 0.4s ease-in-out;
  }
`

const Button = props => {
  return <ButtonWrapper>{props.btnName}</ButtonWrapper>
}

export default Button
