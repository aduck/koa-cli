const execSql = require('../utils/execSql')
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
  execSql(sql)
    .then(() => {
      console.log('创建成功')
    })
}
createTable()