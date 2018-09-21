const Router = require('koa-router')
const router = new Router()
const authCheck = require('../middle/auth')
// controls
const auth = require('../control/auth')
const {getSth} = require('../control/test')
// routes
router.get('/test', authCheck, getSth)
router.post('/login', auth.login)
router.post('/refresh', auth.refresh)
module.exports = router