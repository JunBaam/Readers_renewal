import React, { useState, useCallback } from 'react'
import { ReviewListContainer, ReviewContent, HeartIcon } from './reviewStyles'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'

const ReviewList = ({ post }) => {
  const [liked, setLiked] = useState(false)

  const onToggleLike = useCallback(() => {
    setLiked(prev => !prev)
  }, [])

  return (
    <ReviewListContainer>
      <img
        src={
          'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'
        }
      />

      <HeartIcon onClick={onToggleLike}>
        {liked ? <AiTwotoneHeart color="orangered" /> : <AiOutlineHeart />}
      </HeartIcon>

      <ReviewContent>
        <div> {post.content}</div>
        {post.author} | {post.publish} | #카테고리
        <p> {post.content}</p>
      </ReviewContent>
    </ReviewListContainer>
  )
}

export default ReviewList
