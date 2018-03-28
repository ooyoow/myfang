/**
 * 参数解析中间件
 */

'use strict';

import koaBodyparser from 'koa-bodyparser';

module.exports = app => {
  app.use(koaBodyparser());
}