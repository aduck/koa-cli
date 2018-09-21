const fs = require('fs')
const path = require('path')
const {logPath} = require('../config')
/**
 * 访问日志
 */
module.exports = ctx => {
  if (!fs.existsSync(logPath)) fs.mkdirSync(logPath)
  let today = new Date()
  let fileName = `${today.getFullYear()}-${prefix(today.getMonth() + 1)}-${prefix(today.getDate())}`
  // 记日志
  function log (type, msg) {
    let req = ctx.request
    let url = req.url
    let method = req.method
    let data = JSON.stringify(req.body) || null
    let time = `${prefix(today.getHours())}:${prefix(today.getMinutes())}`
    let ip = req.ip || null
    // 有点诡异
    process.nextTick(() => {
      let uid = ctx.state.user ? ctx.state.user.user_id : 0
      fs.writeFile(path.join(logPath, fileName), `${type} ${url} ${method} ${data} ${time} ${uid} ${ip} ${msg || ''} \r\n`, {flag: 'a'}, err => {
        if (err) throw err
        console.log('log写入成功')
      })
    })
  }
  return {
    info: () => log('info'),
    debug: msg => log('debug', msg),
    error: msg => log('error', msg)
  }
}
function prefix (n) {
  return n >= 10 ? n : `0${n}`
}