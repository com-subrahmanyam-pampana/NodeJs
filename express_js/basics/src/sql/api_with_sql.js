const mysql = require("mysql");
const express = require("express");

const app = express();

let connectionInfo = {
  host: "localhost",
  user: "root",
  password: "ramaBhanam2",
  database: "testDB",
};
const connection = mysql.createConnection(connectionInfo);

function getMovieData(res) {
  connection.connect();
  connection.query("SELECT  * FROM movies", (err, rows, fields) => {
    if (err) throw err;
    let result = Object.values(JSON.parse(JSON.stringify(rows)));
    res.send(result);
  });
  connection.end();
}

app.get("/", (req, res) => {
  return getMovieData(res);
});

app.listen(3000, () =>
  console.log(`Hello world app listening on port ${3000}!`)
);
