const log = require('../utils/log')
module.exports = async (ctx, next) => {
  try {
    log(ctx).info()
    await next()
    ctx.body = ctx.body ? ctx.body : {
      code: ctx.state.code !== undefined ? ctx.state.code : 0,
      data: ctx.state.data || null
    }
  } catch (e) {
    log(ctx).error(e.message)
    ctx.status = 200
    ctx.body = {
      code: -1,
      message: e.message || e.toString()
    }
  }
}