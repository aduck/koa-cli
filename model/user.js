const execSql = require('../utils/execSql')
const md5 = require('../utils/md5')
exports.verify = (userName, password) => {
  let opt = {
    sql: 'SELECT * FROM `USER` WHERE `name` = ? AND `password` = ? LIMIT 1',
    values: [userName, md5(password)]
  }
  return execSql(opt)
}