const log = require('../utils/log')
/**
 * 请求响应模型
 */
module.exports = async (ctx, next) => {
  try {
    await next()
    ctx.body = ctx.body ? ctx.body : {
      code: ctx.state.code !== undefined ? ctx.state.code : 0,
      data: ctx.state.data !== undefined ? ctx.state.data : null
    }
    log(ctx).info()
  } catch (e) {
    let status = e.status
    ctx.status = 200
    ctx.body = {
      code: status ? -status : -1,
      message: e.message || e.toString()
    }
    log(ctx).error(e.message)
  }
}