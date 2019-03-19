const path = require('path')
const merge = require('deepmerge')
const prodConf = require('./prod')
const env = process.env.NODE_ENV || 'development'
module.exports = merge({
  // 服务端口
  port: 8080,
  // 是否开启log
  logger: false,
  // log存放目录
  logPath: path.resolve(__dirname, '../log'),
  // 文件上传
  upload: {
    uploadDir: 'upload',
    maxFileSize: 10 * 1024 * 1024
  },
  // jwt
  token: {
    secret: 'hello world',
    expiresIn: 2 * 60 * 60
  },
  // mysql
  mysql: {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'
  },
  // redis
  redis: {
    port: 6379,
    host: '127.0.0.1',
    family: 4,
    password: ''
  },
  // mail
  mail: {
    host: 'smtp.qq.com',
    port: 465,
    secure: true,
    auth: {
      user: 'test@qq.com',
      pass: '123456'
    }
  },
  // mongodb
  mongodb: {
    address: 'localhost:27017/agenda',
    collection: 'agendaJobs'
  }
}, env === 'production' ? prodConf : {})