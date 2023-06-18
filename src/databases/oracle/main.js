process.env.ORA_SDTZ = 'UTC'
const fs = require('fs')
const oracledb = require('oracledb')
const { runTheQueries } = require('./run')

let libPath
if (process.platform === 'win32') { // Windows
  libPath = 'C:\\sdks\\oracle_insta_client\\instantclient_21_10'
} else if (process.platform === 'darwin') { // macOS
  libPath = process.env.HOME + 'instantclient_21_10'
}
if (libPath && fs.existsSync(libPath)) {
  oracledb.initOracleClient({ libDir: libPath })
  runTheQueries()
} else {
  console.log('issue with the path')
}
