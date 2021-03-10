import React from 'react'
import Button from '../Button'
import Link from 'next/link'
import { SearchResultCard } from './searchStyles'

const SearchItem = props => {
  return (
    <SearchResultCard>
      <img
        src={!props.thumbnail ? 'no_image.jpg' : props.thumbnail}
        alt={props.title}
      />

      <div>
        <h4>{props.title}</h4>
        <h5>
          {props.author}(저자) | {props.publisher}
        </h5>
      </div>
      {/* 
      href : 페이지의 경로
      as : 브라우저 URL   */}
      <Link href="/search/[isbn]" as={`/search/${props.isbn}`}>
        <a>
          <Button size="mid">더보기 / 리뷰작성</Button>
        </a>
      </Link>
    </SearchResultCard>
  )
}

export default SearchItem
