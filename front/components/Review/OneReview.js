import React, { useCallback, useEffect, useState } from 'react'
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
  EllipsisIcon,
  UpdateDeleteWarpper,
} from './oneReviewStyles'
import { CommentWrapper } from './commentStyle'
import {
  AiOutlineHeart,
  AiTwotoneHeart,
  AiOutlineMessage,
  AiOutlineEllipsis,
} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import {
  LIKE_ONEPOST_REQUEST,
  UNLIKE_ONEPOST_REQUEST,
  REMOVE_POST_REQUEST,
} from '../../reducers/post'
import CommentForm from './CommentForm'
import Comment from './Comment'
import Router from 'next/router'

const OneReview = post => {
  const dispatch = useDispatch()
  const id = useSelector(state => state.user.me && state.user.me.id)
  const { removePostDone } = useSelector(state => state.post)
  const [commentFormOpen, setCommentFormOpen] = useState(false)
  const [updateDeleteOpen, setUpdateDeleteOpen] = useState(false)
  const liked = post.likers.find(v => v.id === id)

  useEffect(() => {
    if (removePostDone) {
      Router.replace('/reviewList')
    }
  }, [removePostDone])

  const onLike = useCallback(() => {
    dispatch({
      type: LIKE_ONEPOST_REQUEST,
      data: post.id,
    })
  }, [])
  const onUnLike = useCallback(() => {
    dispatch({
      type: UNLIKE_ONEPOST_REQUEST,
      data: post.id,
    })
  }, [])

  const ratingHandler = () => {
    return null
  }

  const onToggleComment = useCallback(() => {
    setCommentFormOpen(prev => !prev)
  }, [])

  const onToggleUpdateDelete = useCallback(() => {
    setUpdateDeleteOpen(prev => !prev)
  }, [])

  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    })
  }, [])
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
          <AiOutlineMessage onClick={onToggleComment} />
        </ReplyIcon>
        {id && post.user.id === id ? (
          <EllipsisIcon>
            <AiOutlineEllipsis fontSize="30px" onClick={onToggleUpdateDelete} />
          </EllipsisIcon>
        ) : (
          ''
        )}
        {updateDeleteOpen && (
          <UpdateDeleteWarpper>
            <span>수정</span>

            <span onClick={onRemovePost}>삭제</span>
          </UpdateDeleteWarpper>
        )}

        {commentFormOpen && (
          <CommentWrapper>
            <CommentForm id={post.id} />
            {post.comments.map((comment, index) => (
              <Comment
                key={index}
                nickname={comment.User.nickname}
                content={comment.content}
                date={timeForToday(comment.createdAt)}
              />
            ))}
          </CommentWrapper>
        )}
      </UserReviewWrapper>
    </ReviewWriteFormWrapper>
  )
}

export default OneReview
