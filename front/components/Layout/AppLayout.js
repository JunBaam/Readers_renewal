import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styled from 'styled-components'

const Layout = styled.div`
  margin: 0 auto;
  width: 1100px;
`
const AppLayout = ({ children }) => {
  return (
    <Layout>
      <Navbar />
      {children}
      <Footer />
    </Layout>
  )
}

export default AppLayout
