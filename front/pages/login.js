import React, { useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Account from '../components/Account/Account'
import AppLayout from '../components/Layout/AppLayout'
import { useSelector } from 'react-redux'

const login = () => {
  return (
    <AppLayout>
      <Head>
        <title>리더스 로그인/회원가입</title>
      </Head>

      <Account />
    </AppLayout>
  )
}

export default login
