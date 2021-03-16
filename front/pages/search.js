import React from 'react'
import Search from '../components/BookSearch/Search'
import AppLayout from '../components/Layout/AppLayout'
import styled from 'styled-components'
import { LOAD_MY_INFO_REQUEST } from '../reducers/user'
import wrapper from '../store/configureStore'
import axios from 'axios'
import { END } from 'redux-saga'

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

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : ''
  axios.defaults.headers.Cookie = ''
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  })
  context.store.dispatch(END)
  await context.store.sagaTask.toPromise()
})

export default search
