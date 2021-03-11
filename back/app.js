const express = require('express')
const cors = require('cors')

const dotenv = require('dotenv')

const userRouter = require('./routes/user')
const db = require('./models')

dotenv.config()
const app = express()

db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결성공')
  })
  .catch(console.error)

app.use(
  cors({
    origin: true,
    credentials: true,
  })
)

// 프론트에서 넘어온 정보를 req.body에 넣어줌.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('hi expres')
})

app.use('/user', userRouter)

app.listen(3065, () => {
  console.log('서버실행중 ')
})
