const express = require('express')
const { User, Post } = require('../models')
const bcrypt = require('bcrypt')
const passpost = require('passport')

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

// 로그인  /user/login
router.post('/login', (req, res, next) => {
  passpost.authenticate('local', (err, user, info) => {
    // 서버에러
    if (err) {
      console.error(err)
      return next(err)
    }
    //클라이언트 에러
    if (info) {
      return res.status(401).send(info.reason)
    }
    // 성공
    return req.login(user, async loginErr => {
      // 혹시나 모르는 passport err
      if (loginErr) {
        console.error(loginErr)
        return next(loginErr)
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        // 비밀번호 제외
        attributes: {
          exclude: ['password'],
        },
        include: [
          {
            model: Post,
            attributes: ['id'],
          },
        ],
      })
      // 에러없으면 로그인한 사용자의 정보를 프론트로 보냄
      return res.status(200).json(fullUserWithoutPassword)
    })
  })(req, res, next)
})

//로그아웃
router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.send('ok')
})

//로그인 유저 불러오기   /GET /user
router.get('/', async (req, res, next) => {
  try {
    // 사용자가 있으면 보내주고 없으면 아무것도 안보냄
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ['password'],
        },
        include: [
          {
            model: Post,
          },
        ],
      })
      res.status(200).json(fullUserWithoutPassword)
    } else {
      res.status(200).json(null)
    }
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router
