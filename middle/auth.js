const jwt = require('jsonwebtoken')
const {token} =  require('../config')
/**
 * token校验中间件
 */
module.exports = (ctx, next) => {
  let authorization = ctx.header.authorization
  if (!authorization) return ctx.throw(401)
  let authTmp = authorization.toString().split(' ')
  if (!authTmp.length || authTmp[0] !== 'Bearer' || !authTmp[1]) return ctx.throw(401)
  jwt.verify(authTmp[1], token.secret, err => {
    if (err) return ctx.throw(401, err.message)
    next()
  })
}