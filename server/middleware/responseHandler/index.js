/**
 * 请求响应处理中间件
 */

'use strict';

module.exports = app => {
  app.use(async (ctx, next) => {
    ctx.success = (code = 200, message = 'ok', data) => {
      ctx.body = {
        code,
        message,
        data
      };
    };
    ctx.error = (code = 500, message = '', data = {}) => {
      ctx.body = {
        code,
        message,
        data
      };
    };
    ctx.notFound = (code = 404, message, data = {}) => {
      ctx.body = {
        code,
        message,
        data
      };
    };
    await next();
  });
};
