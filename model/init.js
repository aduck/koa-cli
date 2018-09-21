const run = require('./utils')
/**
 * 建表
 */
const createTable = () => {
  let sql = `
    CREATE TABLE IF NOT EXISTS user (
      id INT,
      name VARCHAR(30),
      password VARCHAR(100),
      avater VARCHAR(100)
    )
  `
  run(sql)
    .then(() => {
      console.log('创建成功')
    })
}
createTable()