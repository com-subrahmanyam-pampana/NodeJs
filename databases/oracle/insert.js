const dbconfig = require('./dbconfig')
async function insertData (oracledb) {
  let connection
  try {
    let sql, binds, options, result
    connection = await oracledb.getConnection(dbconfig)
    /* Insert three rows */
    sql = 'INSERT INTO employee VALUES (:1, :2)'
    binds = [
      [1, 'Samantha'],
      [2, 'Trump'],
      [3, 'Robin']
    ]
    options = {
      autoCommit: true,
      // batchErrors: true,  // continue processing even if there are data errors
      bindDefs: [
        { type: oracledb.NUMBER, maxSize: 15 },
        { type: oracledb.STRING, maxSize: 20 }
      ]
    }

    result = await connection.executeMany(sql, binds, options)

    console.log('Number of rows inserted:', result.rowsAffected)
    /* Query the data */
    sql = 'SELECT * FROM employee'

    binds = {}
    options = {
      outFormat: oracledb.OUT_FORMAT_OBJECT // query result format
      // extendedMetaData: true,               // get extra metadata
      // fetchArraySize:   100                 // internal buffer allocation size for tuning
    }

    result = await connection.execute(sql, binds, options)

    console.log('Metadata: ')
    console.dir(result.metaData, { depth: null })
    console.log('Query results: ')
    console.dir(result.rows, { depth: null })
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

module.exports = insertData
