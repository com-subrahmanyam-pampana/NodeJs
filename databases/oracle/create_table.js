
const dbconfig = require('./dbconfig')
const insertData = require('./insert')
async function createTable (oracledb) {
  let connection
  try {
    connection = await oracledb.getConnection(dbconfig)
    /* Create a table */
    const stmts = [
      'DROP TABLE employee',
      `CREATE TABLE employee (
        emp_id number(15) NOT NULL,
        full_name varchar2(20) NOT NULL,
        PRIMARY KEY(emp_id)
      ) `
    ]
    for (const s of stmts) {
      try {
        await connection.execute(s)
      } catch (e) {
        if (e.errorNum !== 942) {
          console.error(e)
        }
      }
    }
    console.error('Table created...')
    insertData(oracledb)
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

module.exports = createTable
