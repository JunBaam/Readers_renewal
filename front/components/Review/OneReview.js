import React from 'react'

import {
  SearchbookInfo,
  SearchBookText,
  ReviewWriteFormWrapper,
  UserReviewWrapper,
} from './oneReviewStyles'

const OneReview = post => {
  return (
    <ReviewWriteFormWrapper>
      <SearchbookInfo>
        <div>
          <img
            src={!post.thumbnail ? '../no_image.jpg' : post.thumbnail}
            alt={post.title}
          />
        </div>
        <SearchBookText>
          <p>{post.title}</p>
          <h5>저자 : {post.author}</h5>
          <h5>
            출판사 : {post.publisher} | {post.date}
          </h5>
          <h5>가격 : {post.price}원</h5>
          <h3>책소개</h3>
          <div>{post.bookinfo}</div>
        </SearchBookText>
      </SearchbookInfo>

      {/* 사용자 리뷰 */}
      <UserReviewWrapper>
        <p>사용자 리뷰</p>
      </UserReviewWrapper>
    </ReviewWriteFormWrapper>
  )
}

export default OneReview
