import React from 'react'
import { CommentListWrapper } from './commentStyle'

const Comment = props => {
  return (
    <CommentListWrapper>
      <h3>{props.nickname} 님</h3>
      <h5> {props.content}</h5>
      <p>{props.date}</p>
    </CommentListWrapper>
  )
}

export default Comment
