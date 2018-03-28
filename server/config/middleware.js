// 中间件按顺序加载
module.exports = [
  {
    name: '跨域权限中间件',
    middleware: 'originAccess',
    version: '0.0.1',
    enabled: true
  }, {
    name: '参数转换中间件',
    middleware: 'bodyParser',
    version: '0.0.1',
    enabled: true
  }, {
    name: 'session中间件',
    middleware: 'session',
    version: '0.0.1',
    enabled: true
  }, {
    name: '路由中间件',
    middleware: 'routes',
    version: '0.0.1',
    enabled: true
  }, {
    name: '响应处理中间件',
    middleware: 'responseHandler',
    version: '0.0.1',
    enabled: true
  }
];