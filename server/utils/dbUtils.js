import config from '../config/server';
const mysql = require('mysql');

const pool = mysql.createPool(config.db);

let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        resolve(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          //释放连接
          connection.release();
        });
      }
    });
  });
};

let createTable = sql => {
  return query(sql, []);
};

let findAll = table => {
  let _sql = 'SELECT * FROM ?? ';
  return query(_sql, [table]);
};

let findDataById = (table, id) => {
  let _sql = 'SELECT * FROM ?? WHERE id = ? ';
  return query(_sql, [table, id]);
};

let findDataByPage = (table, key, sort, keys, start, end) => {
  let col = '??';
  let queryArr = null;
  if (keys === '*') {
    col = '*';
    queryArr = [table, key, start, end];
  } else {
    queryArr = [keys, table, key, start, end];
  }
  let _sql = `SELECT ${col} FROM ?? ORDER BY ?? ${sort} LIMIT ? , ?`;
  return query(_sql, queryArr);
};

let insertData = (table, values) => {
  let _sql = 'INSERT INTO ?? SET ?';
  return query(_sql, [table, values]);
};

let updateData = (table, values, id) => {
  let _sql = 'UPDATE ?? SET ? WHERE id = ?';
  return query(_sql, [table, values, id]);
};

let deleteDataById = (table, id) => {
  let _sql = 'DELETE FROM ?? WHERE id = ?';
  return query(_sql, [table, id]);
};

let select = (table, keys) => {
  let _sql = 'SELECT ?? FROM ?? ';
  return query(_sql, [keys, table]);
};

let count = table => {
  let _sql = 'SELECT COUNT(*) AS total_count FROM ?? ';
  return query(_sql, [table]);
};

module.exports = {
  query,
  createTable,
  findAll,
  findDataById,
  findDataByPage,
  deleteDataById,
  insertData,
  updateData,
  select,
  count
};
