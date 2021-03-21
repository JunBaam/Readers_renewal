import React, { useCallback, useEffect } from 'react'
import MypageTab from './MypageTab'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { logoutRequestAction } from '../../reducers/user'
import {
  MypageWrapper,
  ReviewTab,
  ReviewTitle,
  ReviewContent,
} from './mypageStyles'
import Router from 'next/router'

const Mypage = () => {
  const dispatch = useDispatch()
  const { me } = useSelector(state => state.user)

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction())
  }, [])

  useEffect(() => {
    if (me === null) {
      Router.replace('/')
    }
  }, [me])

  return (
    <MypageWrapper>
      <p>
        {me ? me.email : ''}
        <span onClick={onLogOut}>
          <Button size="small">로그아웃</Button>
        </span>
      </p>

      <MypageTab>
        <div label="작성리뷰목록">
          {me
            ? me.Posts.map(post => (
                <ReviewTab key={post.id}>
                  <img
                    src={!post.image_url ? '../no_image.jpg' : post.image_url}
                    alt={post.title}
                  />
                  <ReviewTitle>
                    <h4> {post.title}</h4>
                    <p>
                      🟊<span>{post.rating}</span>
                    </p>
                  </ReviewTitle>
                  <ReviewContent>
                    {post.author} | {post.publisher} | {post.category}
                  </ReviewContent>
                </ReviewTab>
              ))
            : ''}
        </div>
        <div label="좋아요리뷰목록">좋아요리뷰목록</div>
      </MypageTab>
    </MypageWrapper>
  )
}

export default Mypage
