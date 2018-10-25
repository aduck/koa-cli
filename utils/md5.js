const crypto = require('crypto')
module.exports = secret => {
  return crypto.createHash('md5').update(secret).digest('hex')
}