const path = require('path')
const devConf = require('./dev')
const prodConf = require('./prod')
const env = process.env.NODE_ENV || 'development'
module.exports = Object.assign({
  // 服务端口
  port: 8888,
  // log
  logPath: path.resolve(__dirname, '../log'),
  upload: {
    uploadDir: 'upload',
    maxFileSize: 10 * 1024 * 1024
  },
}, env === 'development' ? devConf : prodConf)