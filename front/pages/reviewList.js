import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AppLayout from '../components/Layout/AppLayout'
import Head from 'next/head'
import ReviewList from '../components/Review/ReviewList'
import styled from 'styled-components'
import { LOAD_POSTS_REQUEST } from '../reducers/post'
import { LOAD_MY_INFO_REQUEST } from '../reducers/user'
import wrapper from '../store/configureStore'
import axios from 'axios'
import { END } from 'redux-saga'

const ReviewListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 34px;
  padding: 14px 20px 14px 26px;

  & > div span {
    font-size: 20px;
    font-weight: 500;
    color: #ff5757;
  }
`
const ReviewListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px 0px 12px 20px;
`

const reviewList = () => {
  const dispatch = useDispatch()
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector(
    state => state.post
  )

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    })
  }, [])

  return (
    <AppLayout>
      <Head>
        <title>리더스 리뷰목록</title>
      </Head>

      <ReviewListHeader>
        <div>
          <span>{mainPosts.length}</span>개의 리뷰가 있습니다.
        </div>
        <div>인기순</div>
      </ReviewListHeader>

      <ReviewListWrapper>
        {mainPosts.map(post => (
          <ReviewList key={post.id} post={post} />
        ))}
      </ReviewListWrapper>
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
})

export default reviewList
