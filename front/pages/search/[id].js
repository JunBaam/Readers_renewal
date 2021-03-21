import React from 'react'
import { Kakao } from '../../components/BookSearch/kakaoRequest'
import AppLayout from '../../components/Layout/AppLayout'
import styled from 'styled-components'
import ReviewWriteForm from '../../components/BookSearch/ReviewWriteForm'
import wrapper from '../../store/configureStore'
import axios from 'axios'
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user'
import { END } from 'redux-saga'

const ReveiwWriteWrapper = styled.div`
  margin: 50px auto;
  width: 900px;
`

const Search = ({ result }) => {
  return (
    <AppLayout>
      <ReveiwWriteWrapper>
        {result.map((book, index) => (
          <ReviewWriteForm
            key={index}
            thumbnail={book.thumbnail}
            title={book.title}
            author={book.authors}
            publisher={book.publisher}
            price={book.price}
            contents={book.contents}
            datetime={book.datetime.slice(0, 10)}
          />
        ))}
      </ReveiwWriteWrapper>
    </AppLayout>
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

  const { id } = context.query

  const bookIsbnSearch = params => {
    return Kakao.get('/v3/search/book?target=isbn', { params })
  }
  const params = {
    query: id.substring(10), //isbn 공백포함 11글자
    size: 1,
    sort: 'accuracy',
  }
  const { data } = await bookIsbnSearch(params)
  const result = data.documents
  return { props: { result } }
})

export default Search
