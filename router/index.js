const Router = require('koa-router')
const router = new Router()
const authCheck = require('../middle/auth')
const formDataParser = require('../middle/formDataParser')
// controls
const auth = require('../control/auth')
const {getSth} = require('../control/test')
const upload = require('../control/upload')
// routes
router.get('/test', authCheck, getSth)
router.post('/login', auth.login)
router.post('/refresh', auth.refresh)
router.post('/upload', formDataParser, upload)
module.exports = router