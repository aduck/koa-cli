const user = require('../model/user')
const jwt = require('jsonwebtoken')
const {token} = require('../config')
// 接入任务调度
const agenda = require('../utils/agenda')
/**
 * 登录
 */
exports.login = async ctx => {
  let body = ctx.request.body
  let userName = body.userName
  let password = body.password
  // 数据库校验账号信息
  let {results} = await user.verify(userName, password)
  if (!results.length) return ctx.throw('用户名或密码错误')
  let payload = {
    user_id: results[0].id,
    user_name: results[0].name,
    avatar: results[0].avatar,
    expireAt: Date.now() + token.expiresIn * 1000,
    valid: token.expiresIn
  }
  // 发邮件
  agenda.now('登录邮件', {userName})
  ctx.state.data = {
    ...payload,
    token: jwt.sign(payload, token.secret, {expiresIn: token.expiresIn})
  }
}
/**
 * 刷新token
 */
exports.refresh = ctx => {
  let body = ctx.request.body
  let oldToken = body.token
  // 解析token
  jwt.verify(oldToken, token.secret, (err, decoded) => {
    if (err) ctx.throw(401, err.message)
    let payload = {...decoded, expireAt: Date.now() + token.expiresIn * 1000}
    delete payload.exp
    delete payload.iat
    ctx.state.data = {
      ...payload,
      token: jwt.sign(payload, token.secret, {expiresIn: token.expiresIn})
    }
  })
}