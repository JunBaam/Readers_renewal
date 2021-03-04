import React from 'react'
import Button from '../Button'
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

      <Button size="mid">더보기 / 리뷰작성</Button>
    </SearchResultCard>
  )
}

export default SearchItem
