import React, { useEffect, useState, useCallback } from 'react'
import { kakaoRequest } from './kakaoRequest'
import SearchItem from './SearchItem'

import { SearchContainer, SearchInput, SearchResult } from './searchStyles'

const Search = () => {
  const [books, setBooks] = useState([])
  const [text, setText] = useState('')
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (query.length > 0) {
      bookSearchHandler(query, true)
    }
  }, [query])

  const onEnter = useCallback(e => {
    // 엔터를 눌렀을 때 호출 되는 함수
    if (e.keyCode === 13) {
      setQuery(text)
    }
  })

  const onTextUpdate = useCallback(e => {
    setText(e.target.value)
  })

  const bookSearchHandler = useCallback(async (query, reset) => {
    const params = {
      query: query,
      sort: 'accuracy', // accuracy | latest 정확도 or 최신
      size: 24, // 최대 50
    }

    const { data } = await kakaoRequest(params)
    if (reset) {
      setBooks(data.documents)
      console.log('검색결과', data.documents)
    } else {
      setBooks(books.concat(data.documents))
    }
  })

  return (
    <SearchContainer>
      <SearchInput>
        <svg>
          <path
            fill-rule="evenodd"
            d="M13.66 7.36a6.3 6.3 0 1 1-12.598 0 6.3 6.3 0 0 1 12.598 0zm-1.73 5.772a7.36 7.36 0 1 1 1.201-1.201l3.636 3.635c.31.31.31.815 0 1.126l-.075.075a.796.796 0 0 1-1.126 0l-3.636-3.635z"
            clip-rule="evenodd"
          />
        </svg>

        <input
          type="search"
          placeholder="검색어를 입력하세요"
          name="query"
          className="input_search"
          onKeyDown={onEnter}
          onChange={onTextUpdate}
          value={text}
        />
      </SearchInput>

      <SearchResult>
        {books.map((book, index) => (
          <SearchItem
            key={index}
            thumbnail={book.thumbnail}
            title={book.title}
            author={book.authors}
            publisher={book.publisher}
            isbn={book.isbn}
          />
        ))}
      </SearchResult>
    </SearchContainer>
  )
}

export default Search
