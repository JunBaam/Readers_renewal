import React from 'react'
import AppLayout from '../components/Layout/AppLayout'
import Slider from '../components/Slider/Slider'
import PostCard from '../components/PostCard'
import Rank from '../components/Rank'

import styled from 'styled-components'

const HomeTitleWrapper = styled.div`
  display: flex;
  margin: 20px 0px;
  font-weight: 700;
  font-size: 20px;

  & > div {
    flex: 0 0 60%;
  }
`

const HomeMidWrapper = styled.div`
  display: flex;
`
const PostCardWrapper = styled.div`
  flex: 0 0 60%;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #ffd5b4;
  justify-content: center;
`
const RankWrapper = styled.div`
  flex: 0 0 40%;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #ffd5b4;
`

const Home = () => {
  return (
    <AppLayout>
      <Slider />

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
