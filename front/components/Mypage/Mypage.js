import React from 'react'
import styled from 'styled-components'
import MypageTab from './MypageTab'
import Button from '../Button'

const MypageWrapper = styled.div`
  width: 900px;
  border-radius: 10px;
  margin: 10px auto;
  & > p {
    font-size: 21px;
    color: #a19f9e;
    padding-bottom: 20px;
  }
  & > p span {
    margin-left: 25px;
  }
`
const Mypage = () => {
  return (
    <MypageWrapper>
      <p>
        유저아이디
        <span>
          <Button size="small">로그아웃</Button>
        </span>
      </p>

      <MypageTab>
        <div label="작성리뷰목록">작성리뷰목록</div>
        <div label="좋아요리뷰목록">좋아요리뷰목록</div>
      </MypageTab>
    </MypageWrapper>
  )
}

export default Mypage
