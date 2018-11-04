const jwt = require('jsonwebtoken')
const {token} =  require('../config')
/**
 * token校验中间件
 */
module.exports = async (ctx, next) => {
  let authorization = ctx.request.header.authorization
  if (!authorization) return ctx.throw(401)
  let authTmp = authorization.toString().split(' ')
  if (!authTmp.length || authTmp[0] !== 'bearer' || !authTmp[1]) return ctx.throw(401)
  ctx.state.user = jwt.verify(authTmp[1], token.secret)
  await next()
}