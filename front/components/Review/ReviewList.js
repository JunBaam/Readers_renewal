import React, { useCallback } from 'react'
import {
  ReviewListContainer,
  ReviewContent,
  ReviewTitle,
  HeartIcon,
} from './reviewStyles'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { LIKE_POST_REQUEST, UNLIKE_POST_REQUEST } from '../../reducers/post'

const ReviewList = ({ post }) => {
  const dispatch = useDispatch()
  const id = useSelector(state => state.user.me && state.user.me.id)

  const onLike = useCallback(() => {
    dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id,
    })
  }, [])
  const onUnLike = useCallback(() => {
    dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id,
    })
  }, [])

  const liked = post.Likers.find(v => v.id === id)

  return (
    <ReviewListContainer>
      <img src={post.image_url} />

      <HeartIcon>
        {liked ? (
          <AiTwotoneHeart color="orangered" key="like" onClick={onUnLike} />
        ) : (
          <AiOutlineHeart key="unlike" onClick={onLike} />
        )}
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
