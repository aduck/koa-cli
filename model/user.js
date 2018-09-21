const run = require('./utils')
const md5 = require('blueimp-md5')
exports.verify = (userName, password) => {
  let opt = {
    sql: 'SELECT * FROM `USER` WHERE `name` = ? AND `password` = ? LIMIT 1',
    values: [userName, md5(password)]
  }
  return run(opt)
}