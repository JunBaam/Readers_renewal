import React from 'react'
import AppLayout from '../components/Layout/AppLayout'
import Head from 'next/head'
import Mypage from '../components/Mypage/Mypage'
import { LOAD_MY_INFO_REQUEST } from '../reducers/user'
import wrapper from '../store/configureStore'
import axios from 'axios'
import { END } from 'redux-saga'

const mypage = data => {
  return (
    <AppLayout>
      <Head>
        <title>리더스 마이페이지</title>
      </Head>
      <Mypage likeReview={data} />
    </AppLayout>
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

  const getLikeReview = await axios.get(
    `${process.env.BASE_URL}/posts/likereview`
  )
  const { data } = getLikeReview
  return { props: { data } }
})

export default mypage
