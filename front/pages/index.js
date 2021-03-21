import React from 'react'
import AppLayout from '../components/Layout/AppLayout'
import Slider from '../components/Slider/Slider'
import PostCard from '../components/PostCard'
import Rank from '../components/Rank'
import styled from 'styled-components'
import { LOAD_MY_INFO_REQUEST } from '../reducers/user'
import wrapper from '../store/configureStore'
import axios from 'axios'
import { END } from 'redux-saga'
import { LOAD_POSTS_REQUEST } from '../reducers/post'

const HomeWrapper = styled.div`
  background-color: white;
`
const HomeTitleWrapper = styled.div`
  display: flex;
  margin: 20px 0px;
  font-weight: 700;
  font-size: 20px;

  & > div {
    flex: 0 0 60%;
    margin-left: 10px;
  }
`
const HomeMidWrapper = styled.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
  padding: 10px 0px 10px 0px;
`
const PostCardWrapper = styled.div`
  flex: 0 0 62%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-right: 50px;
`
const RankWrapper = styled.div`
  flex: 0 0 38%;
  display: flex;
  flex-direction: column;
  justify-content: right;
  border-left: 1px solid #ffd5b4;
`

const Home = ({ data }) => {
  return (
    <HomeWrapper>
      <AppLayout>
        <Slider />

        <HomeTitleWrapper>
          <div>최신 리뷰목록 </div>
          <div>인기 리뷰목록</div>
        </HomeTitleWrapper>

        <HomeMidWrapper>
          <PostCardWrapper>
            <PostCard />
          </PostCardWrapper>

          <RankWrapper>
            <Rank likeCount={data} />
          </RankWrapper>
        </HomeMidWrapper>
      </AppLayout>
    </HomeWrapper>
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
  context.store.dispatch({
    type: LOAD_POSTS_REQUEST,
  })

  // END: request가 success로 바뀔떄까지 기다려준다 .
  context.store.dispatch(END)
  await context.store.sagaTask.toPromise()

  const getLikeCount = await axios.get(
    `${process.env.BASE_URL}/posts/likecount`
  )
  const { data } = getLikeCount
  return { props: { data } }
})

export default Home
