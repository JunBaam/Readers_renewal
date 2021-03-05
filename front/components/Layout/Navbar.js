import React, { useEffect } from 'react'
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
  const { isLoggedIn } = useSelector(state => state.user)
  // const me = useSelector(state => state.user.user.nickname)

  return (
    <NavLayout>
      <Link href="/">
        <img src="/logo.png" />
      </Link>
      <SearchWrapper>
        <Link href="/search">
          <div>도서검색 / 후기작성</div>
        </Link>
      </SearchWrapper>

      {isLoggedIn ? (
        <Link href="/mypage">
          <div>"임시"</div>
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
