import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ReviewUpdateFormWarpper,
  ReviewUpdateCategory,
  ReviewUpdateRating,
  ReviewUpdateContent,
  ButtonWarpper,
  UpdateButton,
} from './reviewUpdateFromStyles'
import styles from '../BookSearch/reviewWrite.module.css'
import StarRating from '../BookSearch/StarRating'
import useInput from '../../custom_hooks/useInput'
import { UPDATE_POST_REQUEST } from '../../reducers/post'
import { Router } from 'next/router'

const ReviewUpdateForm = ({ setEditMode }) => {
  const categorySelect = {
    activeObject: '',
    objects: [
      { id: '1', category: '대학교재' },
      { id: '2', category: '만화' },
      { id: '3', category: '초등/유아' },
      { id: '4', category: '잡지' },
      { id: '5', category: '컴퓨터/IT' },
      { id: '6', category: '여행' },
      { id: '7', category: '취업/수험' },
      { id: '8', category: '과학' },
      { id: '9', category: '외국어' },
      { id: '10', category: '기술/공학' },
      { id: '11', category: '종교' },
      { id: '12', category: '역사/문화' },
      { id: '13', category: '정치/사회' },
      { id: '14', category: '자기계발' },
      { id: '15', category: '경제/경영' },
      { id: '16', category: '건강' },
      { id: '17', category: '요리' },
      { id: '18', category: '가정/육아' },
      { id: '19', category: '인문' },
      { id: '20', category: '시/에세이' },
      { id: '21', category: '소설' },
      { id: '22', category: '중/고등참고서' },
      { id: '23', category: '예술/대중문화' },
      { id: '24', category: '취미/스포츠' },
    ],
  }
  const dispatch = useDispatch()
  const { onePost, updatePostDone } = useSelector(state => state.post)

  const [category, setCategory] = useState(categorySelect)
  const [rating, setRating] = useState(onePost.rating)
  const [text, onChangeText] = useInput(onePost.content)

  const activeBtn = useCallback(index => {
    setCategory({ ...category, activeObject: category.objects[index] })
  })

  const ratingHandler = useCallback(value => {
    setRating(value)
  })

  const updateCancel = useCallback(() => {
    setEditMode(false)
  }, [])

  const onChangePost = useCallback((text, rating, category) => () => {
    if (!text || !text.trim()) {
      return alert('게시글을 작성해주세요')
    }
    return dispatch({
      type: UPDATE_POST_REQUEST,
      data: {
        PostId: onePost.id,
        content: text,
        category: category,
        rating: rating,
      },
    })
  })

  return (
    <ReviewUpdateFormWarpper>
      <p>카테고리</p>
      <ReviewUpdateCategory>
        {category.objects.map((value, index) => (
          <span
            value={value}
            className={
              category.objects[index] === category.activeObject
                ? styles.active
                : styles.inactive
            }
            key={index}
            onClick={() => {
              activeBtn(index)
            }}
          >
            {value.category}
          </span>
        ))}
      </ReviewUpdateCategory>

      <p>평점</p>

      <ReviewUpdateRating>
        <StarRating
          size={35}
          value={rating}
          activeColor={'#FADB14'}
          inactiveColor={'#ddd'}
          onChange={ratingHandler}
        />
      </ReviewUpdateRating>

      <p>리뷰내용</p>
      <ReviewUpdateContent>
        <textarea
          value={text}
          onChange={onChangeText}
          placeholder="리뷰를 작성해주세요."
        />
      </ReviewUpdateContent>

      <ButtonWarpper>
        <UpdateButton
          onClick={onChangePost(text, rating, category.activeObject.category)}
        >
          수정하기
        </UpdateButton>
        <UpdateButton type="button" onClick={updateCancel}>
          취소하기
        </UpdateButton>
      </ButtonWarpper>
    </ReviewUpdateFormWarpper>
  )
}

export default ReviewUpdateForm
