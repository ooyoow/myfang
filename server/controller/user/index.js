'use strict';

import Mysql from 'mysql';
import BaseComponent from '../../prototype/baseComponent';
import user from '../../models/user';
import config from '../../config/server.js';

class User extends BaseComponent {
  constructor() {
    super();
    this.getUserList = this.getUserList.bind(this);
  }

  async getUserList(ctx, next) {
    // let data = ctx.request.body;
    // const arr = [];
    // let querying = '';
    // if (data.user_name) {
    //   querying += ' and user_name like ?';
    //   arr.push('%' + data.user_name + '%');
    // }
    // if (/^[1-3]$/.test(data.user_type)) {
    //   querying += ' and user_type=?';
    //   arr.push(data.user_type >> 0);
    // }

    const [list] = await user.getUserList();
    // const [list] = await connection.query('SELECT * FROM `user`' + querying.replace('and', 'where'), arr);
    // await connection.end();
    // list.forEach(obj => {
    //   obj.user_email = '****' + obj.user_email.slice(4); //过滤邮箱地址
    //   obj.user_pass = '';
    // });
    ctx.body = {
      success: true,
      data: list
    };
  }
}

export default new User();
