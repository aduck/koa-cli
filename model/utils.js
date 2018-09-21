// 数据库操作
const mysql = require('mysql')
const mysqlConf = require('../config').mysql
module.exports = sqlOpt => {
  return new Promise((resolve, reject) => {
    let connection = mysql.createConnection(mysqlConf)
    connection.connect(err => {
      if (err) reject(err)
    })
    connection.query(sqlOpt, (err, results, fields) => {
      if (err) return reject(err)
      resolve({results, fields})
    })
    connection.end()
  })
}
