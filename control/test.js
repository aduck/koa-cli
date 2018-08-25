module.exports = {
  getSth: ctx => {
    let req = ctx.request
    ctx.state.data = `请求path：${req.path}, method：${req.method}`
  }
}