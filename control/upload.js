module.exports = ctx => {
  let fields = ctx.request.fields
  let files = ctx.request.files
  ctx.state.data = {
    fields,
    files
  }
}