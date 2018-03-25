'use strict';

import Koa from 'koa';
import config from './config/server.js';
import router from './routes/index.js';
import koaBodyparser from 'koa-bodyparser';
import chalk from 'chalk';
import MysqlStore from 'koa-mysql-session';
import session from 'koa-session-minimal';
const app = new Koa();
// app.all('*', (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
//   res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Credentials', true); //可以带cookies
//   res.header('X-Powered-By', '3.2.1');
//   if (req.method == 'OPTIONS') {
//     res.send(200);
//   } else {
//     next();
//   }
// });

//
app.use(koaBodyparser());

// session存储配置
const sessionMysqlConfig = {
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  host: config.db.host,
  port: config.db.port
};

// 配置session中间件
app.use(
  session({
    key: 'USER_SID',
    store: new MysqlStore(sessionMysqlConfig)
  })
);

// 记录请求URL
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

// app.use(async (ctx, next) => {
//   const start = new Date();
//   await next();
//   const ms = new Date() - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// });

// router
app.use(router.routes(), router.allowedMethods());

app.listen(config.port, next => {
  console.log(chalk.green(`localhost:${config.port} 服务启动成功`));
});
