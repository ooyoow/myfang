'use strict';

import Koa from 'koa';
import config from './config/server.js';
import router from './routes/index.js';

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

app.listen(config.port);
