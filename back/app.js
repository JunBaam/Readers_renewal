const exrpess = require('express')
const postRouter = require('./routes/post')
const db = require('./models')

const app = exrpess()

db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결성공')
  })
  .catch(console.error)

app.get('/', (req, res) => {
  res.send('hi express!')
})

app.use('./post', postRouter)

app.listen(3065, () => {
  console.log('서버실행중')
})
