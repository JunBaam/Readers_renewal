import React, { useState, useCallback } from 'react'
import {
  ReviewListContainer,
  ReviewContent,
  ReviewTitle,
  HeartIcon,
} from './reviewStyles'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'

const ReviewList = ({ post }) => {
  const [liked, setLiked] = useState(false)

  const onToggleLike = useCallback(() => {
    setLiked(prev => !prev)
  }, [])

  return (
    <ReviewListContainer>
      <img src={post.image_url} />

      <HeartIcon onClick={onToggleLike}>
        {liked ? <AiTwotoneHeart color="orangered" /> : <AiOutlineHeart />}
      </HeartIcon>

      <ReviewContent>
        <ReviewTitle>
          <h4> {post.title}</h4>
          <p>
            🟊<span>{post.rating}</span>
          </p>
        </ReviewTitle>

        <span>
          {post.author} | {post.publisher} | {post.category}
        </span>

        <p> {post.content}</p>
      </ReviewContent>
    </ReviewListContainer>
  )
}

export default ReviewList
