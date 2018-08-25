const Koa = require('koa')
const handle = require('./middle/handle')
const app = new Koa()
const router = require('./router')
const bodyParser = require('koa-bodyparser')
const {port} = require('./config')
// middlewares
app.use(bodyParser())
app.use(handle)
app.use(router.routes())
// listen
app.listen(port || 80, () => {
  console.log(`服务开启成功，端口${port || 80}`)
})