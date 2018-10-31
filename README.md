## 开始

请先配置config文件 dev.js开发配置 prod.js生产配置

```
npm install
npm run dev
```

### 目录

```
api     三方接口
config  配置
control 业务逻辑
job     任务processor
log     日志
middle  中间件
model   封装数据库操作
router  路由
utils   通用（service）
```

### 更新日志

> 2018-10-31
* 添加任务调度（基于agenda，需安装mongodb）
* 修复bug

> 2018-10-25
* 增加邮件支持

> 2018-10-23
* form data解析
* 优化结构

> 2018-09-21
* auth验证
* model操作

> 2018-09-20
* log记录
* 第三方接口

> TODOS
* 验证码
* 手机
* 支付接入
* 异步任务