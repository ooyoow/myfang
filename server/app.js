'use strict';

import Koa from 'koa';
import config from './config/server.js';
import middleware from './middleware';
import chalk from 'chalk';
const app = new Koa();

// 加载中间件
middleware(app);

// 记录请求URL
// app.use(async (ctx, next) => {
//   console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
//   await next();
// });

app.listen(config.port, next => {
  console.log(chalk.green(`localhost:${config.port} 服务启动成功`));
});
