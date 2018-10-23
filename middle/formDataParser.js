const formidable = require('formidable')
const {upload} = require('../config')
const fs = require('fs')
module.exports = async (ctx, next) => {
  let res = await parse(ctx.req)
  ctx.request.fields = res.fields
  ctx.request.files = res.files
  next()
}
// promise parse函数
function parse (stream) {
  !fs.existsSync(upload.uploadDir) && fs.mkdirSync(upload.uploadDir)
  return new Promise((resolve, reject) => {
    let form = new formidable.IncomingForm()
    // 设置最大尺寸
    form.maxFileSize = upload.maxFileSize
    // 设置上传目录
    form.uploadDir = upload.uploadDir
    // 文件保留扩展名
    form.keepExtensions = true
    form.parse(stream, (err, fields, files) => {
      if (err) return reject(err)
      resolve({
        fields,
        files
      })
    })
  })
}