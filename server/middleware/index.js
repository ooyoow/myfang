/* 中间件加载模块 */

import chalk from 'chalk';
import moment from 'moment';
import middleware from '../config/middleware.js';

export default (app) => {
  // 遍历
  for (let i = 0; i < middleware.length; i++) {
    const item = middleware[i];
    try {
      if (!item.enabled) {
        // 输出信息
        // console.log(lang['middleware_load_success'].format(
        //   new Date().format('yyyy-MM-dd HH:mm:ss').yellow,
        //   item.name.grey,
        //   item.version.grey,
        //   lang['middleware_load_success_enabled_false'].yellow
        // ));
        continue;
      }
      // 加载模块
      require('./' + item.middleware)(app);
      // 输出信息
      console.log(
        chalk.cyan(moment(new Date()).format('YYYY-MM-DD HH:mm:ss')),
        chalk.white(item.name),
        chalk.gray(item.version),
        chalk.green('加载成功'),
      );
    } catch (err) {
      // 输出信息
      console.log(
        chalk.cyan(moment(new Date()).format('YYYY-MM-DD HH:mm:ss')),
        chalk.white(item.name),
        chalk.gray(item.version),
        chalk.red('加载失败')
      );
    }
  }
}