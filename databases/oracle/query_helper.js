
const dbconfig = require('./dbconfig')

async function executeQueryArray (oracledb, stmts) {
  let connection
  try {
    connection = await oracledb.getConnection(dbconfig)
    for (const s of stmts) {
      try {
        await connection.execute(s)
      } catch (e) {
        if (e.errorNum !== 942) {
          console.error(e)
        }
      }
    }
  } catch (err) {
    console.error(err)
  } finally {
    if (connection) {
      try {
        await connection.close()
      } catch (err) {
        console.error(err)
      }
    }
  }
}
async function executeMany (oracledb, sql, binds, options) {
  let connection
  try {
    connection = await oracledb.getConnection(dbconfig)
    const result = await connection.executeMany(sql, binds, options)
    console.log(result)
    return result
  } catch (err) {
    console.error(err)
  } finally {
    if (connection) {
      try {
        await connection.close()
      } catch (err) {
        console.error(err)
      }
    }
  }
}

async function executeSQLQuery (oracledb, sql, binds, options) {
  let connection
  try {
    connection = await oracledb.getConnection(dbconfig)
    const result = await connection.execute(sql, binds, options)
    console.log(result)
    return result
  } catch (err) {
    console.error(err)
  } finally {
    if (connection) {
      try {
        await connection.close()
      } catch (err) {
        console.error(err)
      }
    }
  }
}

module.exports = { executeSQLQuery, executeQueryArray, executeMany }
