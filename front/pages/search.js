import React from 'react'
import Search from '../components/BookSearch/Search'
import AppLayout from '../components/Layout/AppLayout'
import styled from 'styled-components'

const SearchWrapper = styled.div`
  background-color: white;
`

const search = () => {
  return (
    <SearchWrapper>
      <AppLayout>
        <Search />
      </AppLayout>
    </SearchWrapper>
  )
}

export default search
