/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
const oracledb = require('oracledb')

const mock1 = () => {
  const sql = 'SELECT * FROM employee'
  const binds = {}
  const options = {
    outFormat: oracledb.OUT_FORMAT_OBJECT // query result format
    // extendedMetaData: true,               // get extra metadata
    // fetchArraySize:   100                 // internal buffer allocation size for tuning
  }
  return {
    sql,
    binds,
    options
  }
}

const mock2 = () => {
  /* Bind by Position */
  /* We are making empId as a varibel in the query and
  and we are passing the value in the binds
  */
  const sql = `SELECT * FROM employee WHERE EMP_ID = :empId`
  const binds = [22]
  const options = {
    outFormat: oracledb.OUT_FORMAT_OBJECT
  }
  return {
    sql,
    binds,
    options
  }
}
const mock3 = () => {
  /* Bind by Position */
  /* We are making empId,fullName as a varibels in the query and
  and we are passing the values in the binds as 1st and 2nd arguments
  */
  const sql = `SELECT * FROM employee WHERE EMP_ID = :empId AND FULL_NAME= :fullName`
  const binds = [22, 'Trump']
  const options = {
    outFormat: oracledb.OUT_FORMAT_OBJECT
  }
  return {
    sql,
    binds,
    options
  }
}

const mock4 = () => {
  /* Bind  by Name */
  /* We are making empId,fullName as a varibels in the query and
  and we are passing the values in the binds as 1st and 2nd arguments as names
  */
  const sql = `SELECT * FROM employee WHERE EMP_ID = :empId AND FULL_NAME= :fullName`
  const binds = {
    empId: { dir: oracledb.BIND_IN, val: 21, type: oracledb.NUMBER },
    fullName: { dir: oracledb.BIND_IN, val: "Samantha", type: oracledb.STRING }
  }
  const options = {
    outFormat: oracledb.OUT_FORMAT_OBJECT
  }
  return {
    sql,
    binds,
    options
  }
}

const selectData = mock4()

module.exports = selectData
