import React, { useCallback } from 'react'
import StarRating from '../BookSearch/StarRating'
import { timeForToday } from '../../utils/timeCheck'
import {
  SearchbookInfo,
  SearchBookText,
  ReviewWriteFormWrapper,
  UserReviewWrapper,
  UserReviewContent,
  HeartIcon,
  ReplyIcon,
} from './oneReviewStyles'
import {
  AiOutlineHeart,
  AiTwotoneHeart,
  AiOutlineMessage,
} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { LIKE_POST_REQUEST, UNLIKE_POST_REQUEST } from '../../reducers/post'

const OneReview = post => {
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

  const liked = ''
  // post.Likers.find(v => v.id === id)
  const ratingHandler = () => {
    return null
  }
  return (
    <ReviewWriteFormWrapper>
      <SearchbookInfo>
        <img
          src={!post.thumbnail ? '../no_image.jpg' : post.thumbnail}
          alt={post.title}
        />

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
        <p>
          '{post.user.nickname}' 님의 리뷰
          <span>#{post.category}</span>
        </p>

        <UserReviewContent>
          <div>
            <StarRating
              size={35}
              value={post.rating}
              activeColor={'#FADB14'}
              inactiveColor={'#ddd'}
              onChange={ratingHandler}
            />
          </div>
          <p>{post.content}</p>
          <span>{timeForToday(post.createdAt)}</span>
        </UserReviewContent>

        <HeartIcon>
          {liked ? (
            <AiTwotoneHeart color="orangered" key="like" onClick={onUnLike} />
          ) : (
            <AiOutlineHeart key="unlike" onClick={onLike} />
          )}
        </HeartIcon>

        <ReplyIcon>
          <AiOutlineMessage />
        </ReplyIcon>
      </UserReviewWrapper>
    </ReviewWriteFormWrapper>
  )
}

export default OneReview
