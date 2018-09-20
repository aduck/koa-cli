const path = require('path')
module.exports = {
  // 此处写配置
  port: 8888,
  sql: {},
  redis: {},
  // 日志目录
  logPath: path.resolve(__dirname, './log')
}