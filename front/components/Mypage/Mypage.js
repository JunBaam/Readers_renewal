import React, { useCallback } from 'react'
import styled from 'styled-components'
import MypageTab from './MypageTab'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { logoutRequestAction } from '../../reducers/user'

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
  const dispatch = useDispatch()
  const onLogOut = useCallback(() => {
    console.log('버튼눌러짐')

    dispatch(logoutRequestAction())
  }, [])

  return (
    <MypageWrapper>
      <p>
        유저아이디
        <span onClick={onLogOut}>
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
