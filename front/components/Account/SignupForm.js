import React, { useCallback, useState, useEffect } from 'react'
import useInput from '../../custom_hooks/useInput'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { SIGN_UP_REQUEST } from '../../reducers/user'
import { FormWrapper, InputWarrper } from './accountStyles'
import Router from 'next/router'

const SignupForm = () => {
  const dispatch = useDispatch()
  const [email, onChangeEmail] = useInput('')
  const [nickname, onChangeNickname] = useInput('')
  const [password, onChangePassword] = useInput('')

  const [passwordCheck, setPasswordCheck] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordCheck(e.target.value)
      setPasswordError(e.target.value !== password)
    },
    [password]
  )

  const { signUpError, signUpDone } = useSelector(state => state.user)

  useEffect(() => {
    if (signUpError) {
      alert(signUpError)
    }
  }, [signUpError])

  useEffect(() => {
    if (signUpDone) {
      Router.replace('/')
    }
  }, [signUpDone])

  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      if (password !== passwordCheck) {
        return setPasswordError(true)
      }
      dispatch({
        type: SIGN_UP_REQUEST,
        data: { email, nickname, password },
      })
      console.log(email, nickname, password)
    },
    [password, passwordCheck]
  )

  return (
    <FormWrapper onSubmit={onSubmit}>
      <InputWarrper
        type="text"
        name="nickname"
        placeholder="닉네임"
        value={nickname}
        onChange={onChangeNickname}
      />

      <InputWarrper
        type="email"
        name="email"
        placeholder="이메일 주소"
        value={email}
        onChange={onChangeEmail}
      />

      <InputWarrper
        type="password"
        name="password"
        placeholder="비밀번호"
        value={password}
        onChange={onChangePassword}
      />

      <InputWarrper
        type="password"
        name="password-check"
        placeholder="비밀번호 확인"
        value={passwordCheck}
        onChange={onChangePasswordCheck}
      />
      {passwordError && <p>비밀번호가 일치하지 않습니다.</p>}

      <Button size="large" type="submit">
        회원가입
      </Button>
    </FormWrapper>
  )
}

export default SignupForm
