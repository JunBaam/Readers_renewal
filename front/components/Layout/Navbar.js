import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

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
      <Link href="/userInterface">
        <div>로그인 / 회원가입</div>
      </Link>
    </NavLayout>
  )
}

export default Navbar
