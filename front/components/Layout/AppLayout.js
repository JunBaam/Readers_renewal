import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styled from 'styled-components'

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const MidWarpper = styled.div`
  width: 1000px;
  margin: 0 auto;
`

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <Navbar />
      <MidWarpper>{children}</MidWarpper>
      <Footer />
    </Layout>
  )
}

export default AppLayout
