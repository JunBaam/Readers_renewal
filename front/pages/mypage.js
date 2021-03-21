import React from 'react'
import { useSelector } from 'react-redux'
import AppLayout from '../components/Layout/AppLayout'
import Head from 'next/head'
import Mypage from '../components/Mypage/Mypage'
import { LOAD_MY_INFO_REQUEST } from '../reducers/user'
import wrapper from '../store/configureStore'
import axios from 'axios'
import { END } from 'redux-saga'
import styled from 'styled-components'

const MyPageWrapper = styled.div`
  background-color: white;
`

const mypage = () => {
  return (
    <MyPageWrapper>
      <AppLayout>
        <Head>
          <title>리더스 마이페이지</title>
        </Head>
        <Mypage />
      </AppLayout>
    </MyPageWrapper>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : ''
  axios.defaults.headers.Cookie = ''
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  })
  context.store.dispatch(END)
  await context.store.sagaTask.toPromise()
})

export default mypage
