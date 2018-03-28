// session持久化中间件

'use strict';

import MysqlStore from 'koa-mysql-session';
import session from 'koa-session-minimal';
import config from '../../config/server.js';

// session存储配置
const sessionMysqlConfig = {
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  host: config.db.host
};

module.exports = app => {
  app.use(session({
    key: 'USER_SID',
    store: new MysqlStore(sessionMysqlConfig)
  }));
}