const mail = require('../utils/mail')
module.exports = agenda => {
  // job processor
  agenda.define('登录邮件', (job, done) => {
    let userName = job.attrs.data.userName
    mail({to: '123@exp.com', subject: '登录邮件', text: `恭喜${userName}登录成功了！`})
      .then(() => {
        done()
      })
      .catch(e => {
        console.log(e.message)
      })
  })
}