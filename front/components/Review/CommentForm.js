import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useInput from '../../custom_hooks/useInput'
import { ADD_COMMENT_REQUEST } from '../../reducers/post'
import Button from '../Button'
import { CommentFormWrapper } from './commentStyle'

const CommentForm = post => {
  const dispatch = useDispatch()
  const id = useSelector(state => state.user.me?.id)
  const { addCommentDone } = useSelector(state => state.post)
  const [text, onChangeText, setCommentText] = useInput('')

  useEffect(() => {
    if (addCommentDone) {
      setCommentText('')
    }
  }, [addCommentDone])

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault()
      if (!text || !text.trim()) {
        return alert('댓글을 작성해주세요')
      }
      return dispatch({
        type: ADD_COMMENT_REQUEST,
        data: { content: text, userId: id, postId: post.id },
      })
    },
    [text]
  )

  return (
    <CommentFormWrapper onSubmit={onSubmitForm}>
      <textarea
        value={text}
        onChange={onChangeText}
        placeholder="댓글을 작성해주세요."
      />
      <div>
        <Button size="small" type="submit">
          댓글작성
        </Button>
      </div>
    </CommentFormWrapper>
  )
}

export default CommentForm
