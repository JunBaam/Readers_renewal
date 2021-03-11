const passport = require('passport')
const local = require('./local')
const { User } = require('../models')

module.exports = () => {
  // user.id만 따로저장
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  // user.id를 통해서 값을 복구
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } })
      //   서버에러, 성공
      done(null, user)
    } catch (error) {
      console.error(error)
      done(error)
    }
  })

  local()
}
