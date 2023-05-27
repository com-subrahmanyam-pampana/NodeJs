
const sql = [
  'DROP TABLE employee',
    `CREATE TABLE employee (
      emp_id number(15) NOT NULL,
      full_name varchar2(20) NOT NULL,
      PRIMARY KEY(emp_id)
    ) `
]

const createData = {
  sql
}
module.exports = createData
