import React from 'react'
import AppLayout from '../components/Layout/AppLayout'
import Head from 'next/head'
import Search from '../components/BookSearch/Search'
import { LOAD_MY_INFO_REQUEST } from '../reducers/user'
import styled from 'styled-components'
import wrapper from '../store/configureStore'
import axios from 'axios'
import { END } from 'redux-saga'

const SearchWrapper = styled.div`
  background-color: white;
`

const reviewWrite = () => {
  return (
    <SearchWrapper>
      <AppLayout>
        <Head>
          <title>리더스 도서검색</title>
        </Head>
        <Search />
      </AppLayout>
    </SearchWrapper>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  // console.log('getServerSideProsps', context)

  // 쿠키전달 , 쿠키 공유 방지.
  // 쿠키를 안쓰고 요청보낼때는 서버에서 공유하는 쿠키를 제거한다.
  const cookie = context.req ? context.req.headers.cookie : ''
  axios.defaults.headers.Cookie = ''
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  })
  // END: request가 success로 바뀔떄까지 기다려준다 .
  context.store.dispatch(END)
  // console.log('getServerSideProps end')
  await context.store.sagaTask.toPromise()
})

export default reviewWrite
