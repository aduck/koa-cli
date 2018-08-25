const Router = require('koa-router')
const router = new Router()
// todo 在此引入control
const {getSth} = require('../control/test')
// service
router
  .prefix('/test')
  .get('/', getSth)
module.exports = router