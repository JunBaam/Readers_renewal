import React from 'react'
import Button from '../Button'
import useForm from '../../custom_hooks/useForm'
import validate from './validateInfo'
import { FormWrapper, InputWarrper } from './accountStyles'

const LoginForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  )

  return (
    <FormWrapper onSubmit={handleSubmit} noValidate>
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

      <Button size="large" type="submit">
        로그인
      </Button>
    </FormWrapper>
  )
}

export default LoginForm
