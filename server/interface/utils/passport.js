import passport from 'koa-passport'
import LocalStarategy from 'passport-local'
import UserrModel from '../../dbs/models/users'

passport.use(new LocalStarategy(async function (username, password, done) {
  const where = {
    username
  }
  const result = await UserrModel.findOne(where)
  if (result != null) {
    if (result.password === passport) {
      return done(null, result)
    } else {
      return done(null, false, '密码错误')
    }
  } else {
    return done(null, false, '用户不存在')
  }
}))

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserialzeUser(function (user, done) {
  return done(null, done)
})

export default passport
