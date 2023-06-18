/* eslint-disable no-unused-vars */
const oracledb = require('oracledb')
const { executeSQLQuery, executeMany, executeQueryArray } = require('./query_helper')
const { createData, insertData, selectData, fetchRowsWithResultSet } = require('./queries/index.js')
const dbconfig = require('./dbconfig')

const runTheQueries = () => {
  test1()
}

const test1 = () => {
  selectYourQuery('select_data').then((result) => {
    console.log('Query results: ')
    console.dir(result.rows, { depth: null })
    // console.log('Metadata: ')
    //     console.dir(result.metaData, { depth: null })
  }).catch(e => {
    console.log(e)
  })
}

const test2 = async () => {
  /* Fetch Rows with Result Sets */
  /* When the number of query rows is relatively big, or cannot be predicted,
it is recommended to use a ResultSet, */
// fetchRowsWithResultSet.sql, fetchRowsWithResultSet.binds, fetchRowsWithResultSet.options
  let connection

  try {
    connection = await oracledb.getConnection(dbconfig)
    const result = await connection.execute(
      fetchRowsWithResultSet.sql,
      fetchRowsWithResultSet.binds, fetchRowsWithResultSet.options
    )

    const rs = result.resultSet
    let row
    let i = 1

    while ((row = await rs.getRow())) {
      console.log('getRow(): row ' + i++)
      console.log(row)
    }
    // always close the ResultSet
    await rs.close()
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

const test3 = async () => {
  let connection

  try {
    connection = await oracledb.getConnection(dbconfig)
    const stream = connection.queryStream('SELECT * FROM employee')

    stream.on('error', function (error) {
      console.log(error)
    })

    stream.on('data', function (data) {
      console.log(data)
    })

    stream.on('end', function () {
    // all data has been fetched...
      stream.destroy() // the stream should be closed when it has been finished
    })

    stream.on('close', function () {
    // can now close connection...  (Note: do not close connections on 'end')
      console.log('Closed')
    })

    stream.on('metadata', function (metadata) {
    // access metadata of query
    })
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

async function selectYourQuery (s) {
  switch (s) {
    case 'create_table':
      executeQueryArray(oracledb, createData.sql)
      break
    case 'insert_data':
      return await executeMany(oracledb, insertData.sql, insertData.binds, insertData.options)
    case 'select_data':
      return await executeSQLQuery(oracledb, selectData.sql, selectData.binds, selectData.options)
  }
}

module.exports = { runTheQueries }
