import React from 'react'
import { useSelector } from 'react-redux'
import AppLayout from '../components/Layout/AppLayout'
import Head from 'next/head'
import ReviewList from '../components/Review/ReviewList'
import styled from 'styled-components'

const ReviewListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 34px;
  padding: 14px 14px 14px 0;

  & > div span {
    color: #ff5757;
  }
`

const ReviewListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px 0px 12px 20px;
`

const reviewList = () => {
  const { isLoggedIn } = useSelector(state => state.user)
  const { mainPosts } = useSelector(state => state.post)

  return (
    <AppLayout>
      <Head>
        <title>리더스 리뷰목록</title>
      </Head>

      <ReviewListHeader>
        <div>
          <span>N</span>개의 리뷰가 있습니다.
        </div>
        <div>인기순</div>
      </ReviewListHeader>

      <ReviewListWrapper>
        {mainPosts.map((post, index) => (
          <ReviewList key={post.id} post={post} />
        ))}
      </ReviewListWrapper>
    </AppLayout>
  )
}

export default reviewList
