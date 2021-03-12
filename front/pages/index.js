import React, { useEffect } from 'react'
import AppLayout from '../components/Layout/AppLayout'
import Slider from '../components/Slider/Slider'
import PostCard from '../components/PostCard'
import Rank from '../components/Rank'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { LOAD_MY_INFO_REQUEST } from '../reducers/user'

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

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    })
  }, [])
  return (
    <AppLayout>
      <Slider />

      {/* Todo: 바꿔야됨 */}
      <HomeTitleWrapper>
        <div>리뷰목록 </div>
        <div>인기 리뷰목록</div>
      </HomeTitleWrapper>

      <HomeMidWrapper>
        <PostCardWrapper>
          <PostCard />
        </PostCardWrapper>

        <RankWrapper>
          <Rank />
        </RankWrapper>
      </HomeMidWrapper>
    </AppLayout>
  )
}

export default Home
