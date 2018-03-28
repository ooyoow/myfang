/**
 * 跨域权限中间件
 */

'use strict';

module.exports = app => {
  const originAccess = app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', ctx.request.headers.origin || '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With'); // 允许使用Authorization
    // ctx.set('Content-Type, Authorization, X-Requested-With, Access-Control-Allow-Headers', 'Origin, Accept')
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    ctx.set('Access-Control-Allow-Credentials', true); // 可以带cookies
    if (ctx.method == 'OPTIONS') {
      ctx.send(200);
      ctx.body = 'options OK';
    } else {
      await next();
    }
  });
}
