const oracledb = require('oracledb')

const sql = 'SELECT * FROM employee'
const binds = {}
const options = {
  outFormat: oracledb.OUT_FORMAT_OBJECT // query result format
  // extendedMetaData: true,               // get extra metadata
  // fetchArraySize:   100                 // internal buffer allocation size for tuning
}

const selectData = {
  sql,
  binds,
  options
}

module.exports = selectData
