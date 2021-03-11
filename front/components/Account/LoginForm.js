import React, { useCallback, useState } from 'react'
import Button from '../Button'
import { FormWrapper, InputWarrper } from './accountStyles'
import { useDispatch } from 'react-redux'
import { loginRequestAction } from '../../reducers/user'
import Link from 'next/link'
import Router from 'next/router'

const LoginForm = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value)
  }, [])

  const onChangePassowrd = useCallback(e => {
    setPassword(e.target.value)
  }, [])

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault()
      console.log(email, password)
      dispatch(loginRequestAction([email, password]))
    },
    [email, password]
  )

  return (
    <FormWrapper onSubmit={onSubmitForm}>
      <InputWarrper
        type="email"
        name="email"
        placeholder="이메일 주소"
        value={email}
        onChange={onChangeEmail}
      />
      {/* {errors.email && <p>{errors.email}</p>} */}

      <InputWarrper
        type="password"
        name="password"
        placeholder="비밀번호"
        value={password}
        onChange={onChangePassowrd}
      />
      {/* {errors.password && <p>{errors.password}</p>} */}

      <Button size="large" type="submit">
        로그인
      </Button>
    </FormWrapper>
  )
}

export default LoginForm
