'use strict';

module.exports = {
  name: 'myfang服务',
  port: 3000,
  dbIp: '127.0.0.1',
  dbPort: '27017',
  dbName: 'myfang',
  dbUser: '',
  dbPass: '',
  version: '0.0.1',
  lang: 'zh_cn',
  licence: '',
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
