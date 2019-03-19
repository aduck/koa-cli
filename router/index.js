const Router = require('koa-router')
const router = new Router()
const authCheck = require('../middle/auth')
const formDataParser = require('../middle/formDataParser')
// controls
const {login, refresh} = require('../control/authCtl')
const {getSth} = require('../control/demoCtl')
const upload = require('../control/uploadCtl')
// routes
router.get('/demo', getSth)
router.get('/verify', authCheck, getSth)
router.post('/login', login)
router.post('/refresh', refresh)
router.post('/upload', formDataParser, upload)
module.exports = router