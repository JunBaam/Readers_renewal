import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  const Footer = styled.div`
    padding: 15px 0;
    text-align: center;
    background-color: white;
    color: #292929;
    margin-top: 70px;
    font-weight: bold;
    width: 100%;
  `

  return (
    <Footer>
      <div> Next.js & Node.js Project</div>
      <div>&copy; 2021 JunBeom Ahn All rights reserved.</div>
      <br />
    </Footer>
  )
}

export default Footer
