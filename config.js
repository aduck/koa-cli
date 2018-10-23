const path = require('path')
module.exports = {
  // 服务端口
  port: 8888,
  // mysql
  mysql: {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'
  },
  // redis
  redis: {},
  // log
  logPath: path.resolve(__dirname, './log'),
  // jwt
  token: {
    secret: 'hello world',
    expiresIn: 2 * 60 * 60
  },
  // upload
  upload: {
    uploadDir: './upload',
    maxFileSize: 10 * 1024 * 1024
  }
}