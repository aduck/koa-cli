const axios = require('axios')
// 默认超时时间5s
axios.defaults.timeout = 5000
// 可以自定义拦截器
module.exports = opts => {
  return axios(opts)
}