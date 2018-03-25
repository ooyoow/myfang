'use strict';

module.exports = {
  name: 'myfang服务',
  port: 3000,
  licence: '',
  lang: 'zh_cn',
  version: '0.0.1',
  db: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'myfang'
  },
  session: {
    name: 'SID',
    secret: 'SID',
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 365 * 24 * 60 * 60 * 1000
    }
  }
};
