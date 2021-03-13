import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const NavLayout = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  cursor: pointer;

  & > img {
    width: 210px;
    height: 50px;
    margin-right: 10px;
  }
  & > div {
    font-size: 16px;
    font-weight: 700;
    margin-top: 10px;
  }
`

const SearchWrapper = styled.div`
  margin-right: auto;
  margin-left: 30px;
`

const Navbar = () => {
  const { me } = useSelector(state => state.user)

  return (
    <NavLayout>
      <Link href="/">
        <img src="/logo.png" />
      </Link>
      <div>
        <Link href="/reviewList">
          <span>리뷰 둘러보기</span>
        </Link>
      </div>
      <SearchWrapper>
        <Link href="/search">
          <span>도서검색 / 후기작성</span>
        </Link>
      </SearchWrapper>

      {me ? (
        <Link href="/mypage">
          <div>{me.nickname}</div>
        </Link>
      ) : (
        <Link href="/login">
          <div> 로그인 / 회원가입</div>
        </Link>
      )}
    </NavLayout>
  )
}

export default Navbar
