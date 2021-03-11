const express = require('express')
const { User, Post } = require('../models')
const bcrypt = require('bcrypt')

const router = express.Router()

// 회원가입 /user
router.post('/', async (req, res, next) => {
  try {
    const exEmail = await User.findOne({
      where: {
        email: req.body.email,
      },
    })
    if (exEmail) {
      // return: 라우터 종료 ( 안붙이면 다음 함수로 넘어감 )
      return res.status(403).send('이미 사용중인 이메일입니다.')
    }
    // 보안강도
    const hashedPassword = await bcrypt.hash(req.body.password, 12)
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    })
    res.status(201).send('ok')
  } catch (error) {
    console.error(error)
    // express가 브라우저로 에러를 알려준다.
    next(error)
  }
})

module.exports = router
