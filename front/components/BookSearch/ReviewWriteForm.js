import React, { useCallback, useEffect, useState } from 'react'
import styles from './reviewWrite.module.css'
import StarRating from './StarRating'
import Button from '../Button'
import useInput from '../../custom_hooks/useInput'
import { ADD_POST_REQUEST } from '../../reducers/post'
import { useDispatch, useSelector } from 'react-redux'
import Router from 'next/router'
import {
  ReviewWriteFormWrapper,
  SearchbookInfo,
  SearchBookText,
  ReviewWriteWapper,
  ReviewCategory,
  ReviewInput,
  ButtonPosition,
} from './ReviewStyles'

const ReviewWriteForm = props => {
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
  const [category, setCategory] = useState(categorySelect)
  const [rating, setRating] = useState(1)
  const [text, onChangeText] = useInput('')
  const { addPostDone } = useSelector(state => state.post)

  const ratingHandler = useCallback(value => {
    setRating(value)
  })
  const activeBtn = useCallback(index => {
    setCategory({ ...category, activeObject: category.objects[index] })
  })

  useEffect(() => {
    if (addPostDone) {
      Router.replace('/reviewList')
    }
  }, [addPostDone])

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault()
      if (!text || !text.trim()) {
        return alert('게시글을 작성해주세요')
      }
      let categoryValue = category.activeObject.category

      // 제목,책정보,저자,작성자,가격,출판일,카테고리,별점,이미지,후기내용  10개
      return dispatch({
        type: ADD_POST_REQUEST,
        data: {
          title: props.title,
          bookinfo: props.contents,
          author: props.author.toString(),
          publisher: props.publisher,
          price: props.price,
          date: props.datetime,
          image_url: props.thumbnail,
          category: categoryValue,
          rating: rating,
          content: text,
        },
      })
    },
    [text, category, rating]
  )

  return (
    <ReviewWriteFormWrapper onSubmit={onSubmitForm}>
      <SearchbookInfo>
        <div>
          <img
            src={!props.thumbnail ? '../no_image.jpg' : props.thumbnail}
            alt={props.title}
          />
        </div>
        <SearchBookText>
          <p>{props.title}</p>
          <h5>저자 : {props.author}</h5>
          <h5>
            출판사 : {props.publisher} | {props.datetime}
          </h5>
          <h5>가격 : {props.price}원</h5>
          <h3>책소개</h3>
          <div>{props.contents}</div>
        </SearchBookText>
      </SearchbookInfo>

      <ReviewWriteWapper>
        <p>카테고리</p>
        <ReviewCategory>
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
        </ReviewCategory>

        <p>평점</p>
        <span>
          <StarRating
            size={35}
            value={rating}
            activeColor={'#FADB14'}
            inactiveColor={'#ddd'}
            onChange={ratingHandler}
          />
        </span>

        <p>도서리뷰내용</p>
        <ReviewInput>
          <textarea
            value={text}
            onChange={onChangeText}
            placeholder="리뷰를 작성해주세요."
          />
        </ReviewInput>
        <ButtonPosition>
          <Button size="large" type="submit">
            리뷰작성
          </Button>
        </ButtonPosition>
      </ReviewWriteWapper>
    </ReviewWriteFormWrapper>
  )
}

export default ReviewWriteForm
