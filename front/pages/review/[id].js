import React from 'react'
import { useSelector } from 'react-redux'
import wrapper from '../../store/configureStore'
import axios from 'axios'
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user'
import { LOAD_POST_REQUEST } from '../../reducers/post'
import { END } from 'redux-saga'
import Head from 'next/head'
import AppLayout from '../../components/Layout/AppLayout'
import OneReview from '../../components/Review/OneReview'

const Review = () => {
  const { onePost } = useSelector(state => state.post)
  //getServerSideProps 데이터를 가져올동안 로딩
  if (!onePost) {
    return null
  }
  return (
    <AppLayout>
      <Head>
        <title>{onePost.User.nickname}님의 후기</title>
      </Head>

      <OneReview
        id={onePost.id}
        thumbnail={onePost.image_url}
        title={onePost.title}
        bookinfo={onePost.bookinfo}
        content={onePost.content}
        price={onePost.price}
        date={onePost.date}
        rating={onePost.rating}
        author={onePost.author}
        publisher={onePost.publisher}
        category={onePost.category}
        user={onePost.User}
        createdAt={onePost.createdAt}
        likers={onePost.Likers}
        comments={onePost.Comments}
      />
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
  context.store.dispatch({
    type: LOAD_POST_REQUEST,
    data: context.params.id,
  })
  context.store.dispatch(END)
  await context.store.sagaTask.toPromise()
  return { props: {} }
})

export default Review
