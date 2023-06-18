/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
const oracledb = require('oracledb')
/* When the number of query rows is relatively big, or cannot be predicted,
it is recommended to use a ResultSet, */

const mock1 = () => {
  const sql = 'SELECT * FROM employee'
  const binds = {}
  const options = {
    resultSet: true // return a ResultSet (default is false)
  }
  return {
    sql,
    binds,
    options
  }
}

const fetchRowsWithResultSet = mock1()

module.exports = fetchRowsWithResultSet
