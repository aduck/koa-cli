const mail = require('nodemailer')
const conf = require('../config').mail
let transporter = mail.createTransport(conf)
module.exports = data => {
  // 默认
  let defaults = {
    from: conf.auth && conf.auth.user,
    to: [],
    cc: [],
    subject: '',
    text: '',
    html: '',
    attachments: []
  }
  data = Object.assign({}, defaults, data)
  return new Promise((resolve, reject) => {
    transporter.sendMail(data, (err, info) => {
      if (err) return reject(err)
      resolve(info)
    })
  })
}