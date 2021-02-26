import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  const Footer = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 15px 0;
    text-align: center;
    background-color: #292929;
    color: white;
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
