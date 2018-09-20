const axios = require('axios')
const map = require('./map')
// 默认超时时间5s
axios.defaults.timeout = 5000
module.exports = apiName => {
  if (!map[apiName]) throw new Error('请先配置第三方接口')
  return axios(map[apiName])
}