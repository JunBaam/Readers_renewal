import React, { useState } from 'react'
import styled from 'styled-components'
import AccountTabs from './AccountTabs'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

import { AccountWrapper } from './accountStyles'

const Account = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const submitForm = () => {
    setIsSubmitted(true)
  }

  return (
    <AccountWrapper>
      <AccountTabs>
        <div label="로그인">
          <LoginForm submitForm={submitForm} />
        </div>
        <div label="회원가입">
          <SignupForm submitForm={submitForm} />
        </div>
      </AccountTabs>
    </AccountWrapper>
  )
}

export default Account
