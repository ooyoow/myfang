// 路由处理中间件

'use strict';

import routes from '../../routes';

module.exports = app => {
  app.use(routes.routes(), routes.allowedMethods());
}
