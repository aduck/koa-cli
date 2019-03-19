const jwt = require('jsonwebtoken')
const {token} =  require('../config')
/**
 * token校验中间件
 */
module.exports = async (ctx, next) => {
  let authorization = ctx.request.header.authorization
  let auth2Arr = authorization && authorization.split(' ') || []
  if (!authorization || auth2Arr.length !== 2 || auth2Arr[0] !== 'bearer') return ctx.throw(401)
  ctx.state.user = jwt.verify(auth2Arr[1], token.secret)
  await next()
}