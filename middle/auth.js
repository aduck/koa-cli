const jwt = require('jsonwebtoken')
const {token} =  require('../config')
/**
 * token校验中间件
 */
module.exports = (ctx, next) => {
  let authorization = ctx.request.header.authorization
  if (!authorization) return ctx.throw(401)
  let authTmp = authorization.toString().split(' ')
  if (!authTmp.length || authTmp[0] !== 'bearer' || !authTmp[1]) return ctx.throw(401)
  jwt.verify(authTmp[1], token.secret, (err, decoded) => {
    if (err) return ctx.throw(401, err.message)
    // 保存用户信息
    ctx.state.user = decoded
    next()
  })
}