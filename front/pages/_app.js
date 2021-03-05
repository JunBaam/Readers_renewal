import React from 'react'
import Head from 'next/head'
import '../styles/global.css'
import wrapper from '../store/configureStore'

// index.js의 부모 컴포넌트 라고생각하면 편함.
const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>리더스</title>
      </Head>

      <Component />
    </>
  )
}
// 리덕스연결
export default wrapper.withRedux(App)
