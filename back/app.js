const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const db = require('./models')
const passport = require('passport')
const passportConfig = require('./passport')
const hpp = require('hpp')
const helmet = require('helmet')

const postsRouter = require('./routes/posts')
const postRouter = require('./routes/post')
const userRouter = require('./routes/user')

dotenv.config()
const app = express()

db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결성공')
  })
  .catch(console.error)

// passport를 app.js와 연결
passportConfig()

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'))
  app.use(hpp())
  app.use(helmet())
} else {
  app.use(morgan('dev'))
}

app.use(
  cors({
    origin: ['http://localhost:3000', 'http://3.36.197.161:3000'],
    credentials: true,
  })
)

// 프론트에서 넘어온 정보를 req.body에 넣어줌.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
  res.send('hi expres')
})

app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/posts', postsRouter)

app.listen(3065, () => {
  console.log('서버실행중 ')
})
