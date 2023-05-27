process.env.ORA_SDTZ = 'UTC'
const fs = require('fs')
const oracledb = require('oracledb')
const { executeSQLQuery, executeMany, executeQueryArray } = require('./query_helper')
const { createData, insertData, selectData } = require('./queries/index.js')
let libPath
if (process.platform === 'win32') { // Windows
  libPath = 'C:\\sdks\\oracle_insta_client\\instantclient_21_10'
} else if (process.platform === 'darwin') { // macOS
  libPath = process.env.HOME + 'instantclient_21_10'
}
if (libPath && fs.existsSync(libPath)) {
  oracledb.initOracleClient({ libDir: libPath })
  test1('select_data')
  // console.log('Metadata: ')
  //     console.dir(result.metaData, { depth: null })
  //     console.log('Query results: ')
  //     console.dir(result.rows, { depth: null })
} else {
  console.log('issue with the path')
}

async function test1 (s) {
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
