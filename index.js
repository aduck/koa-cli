const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const app = new Koa()
const handle = require('./middle/handle')
const router = require('./router')
const {port = 80} = require('./config')
// middlewares
app.use(cors())
app.use(bodyParser())
app.use(handle)
app.use(router.routes())
// listen
app.listen(port, () => {
  console.log(`服务开启成功，端口${port}`)
})