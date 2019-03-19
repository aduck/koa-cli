const log = require('../utils/log')
const {logger} = require('../config')
/**
 * 请求响应模型
 */
module.exports = async (ctx, next) => {
  try {
    await next()
    ctx.body = ctx.body ? ctx.body : {
      code: typeof ctx.state.code !== 'undefined' ? ctx.state.code : 0,
      data: typeof ctx.state.data !== 'undefined' ? ctx.state.data : null
    }
    logger && log(ctx).info()
  } catch (e) {
    let status = e.status
    ctx.status = 200
    ctx.body = {
      code: status ? -status : -1,
      message: e.message || e.toString()
    }
    logger && log(ctx).error(e.message)
  }
}