import React from 'react'
import useForm from '../../custom_hooks/useForm'
import validate from './validateInfo'
import Button from '../Button'

import { FormWrapper, InputWarrper } from './accountStyles'

const SignupForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  )
  return (
    <FormWrapper onSubmit={handleSubmit} noValidate>
      <InputWarrper
        type="text"
        name="username"
        placeholder="아이디"
        value={values.username}
        onChange={handleChange}
      />
      {errors.username && <p>{errors.username}</p>}

      <InputWarrper
        type="email"
        name="email"
        placeholder="이메일 주소"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}

      <InputWarrper
        type="password"
        name="password"
        placeholder="비밀번호"
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}

      <InputWarrper
        type="password"
        name="password2"
        placeholder="비밀번호 확인"
        value={values.password2}
        onChange={handleChange}
      />
      {errors.password2 && <p>{errors.password2}</p>}

      {/* <button className="form-input-btn" type="submit">
        회원가입
      </button> */}
      <Button size="large" type="submit">
        회원가입
      </Button>
    </FormWrapper>
  )
}

export default SignupForm
