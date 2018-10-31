/**
 * 创建表demo
 */
const execSql = require('../utils/execSql')
module.exports = () => {
  let sql = `
    CREATE TABLE IF NOT EXISTS task (
      id INT NOT NULL AUTO_INCREMENT COMMENT '主键',
      userId VARCHAR(40) NOT NULL COMMENT '用户id',
      rule VARCHAR(40) NOT NULL COMMENT '触发规则',
      status TINYINT NOT NULL DEFAULT 0 COMMENT '0正常 1禁用',
      type TINYINT NOT NULL COMMENT '0发邮件 1其它待更新',
      args TEXT COMMENT 'json类型参数',
      PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `
  execSql(sql)
    .then(() => {
      console.log('task表创建成功')
    })
    .catch(e => {
      console.log(e.message)
    })
}