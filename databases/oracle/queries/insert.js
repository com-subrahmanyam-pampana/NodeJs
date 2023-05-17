const oracledb = require('oracledb')
/* Insert three rows */
const sql = 'INSERT INTO employee VALUES (:1, :2)'
const binds = [
  [1, 'Samantha'],
  [2, 'Trump'],
  [3, 'Robin']
]
const options = {
  autoCommit: true,
  // batchErrors: true,  // continue processing even if there are data errors
  bindDefs: [
    { type: oracledb.NUMBER, maxSize: 15 },
    { type: oracledb.STRING, maxSize: 20 }
  ]
}

const insertData = {
  sql,
  binds,
  options
}

module.exports = insertData
