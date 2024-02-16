const mysql = require("mysql");
const express = require("express");

const app = express();

let connectionInfo = {
  host: "localhost",
  user: "root",
  password: "",
  database: "testDB",
};
const connection = mysql.createConnection(connectionInfo);

async function getMovieData() {
  return new Promise((resolve, reject) => {
    connection.connect();
    connection.query("SELECT  * FROM movies", (err, rows, fields) => {
      if (err) {
        connection.end();
        reject();
      }
      let result = Object.values(JSON.parse(JSON.stringify(rows)));
      connection.end();
      resolve(result);
    });
  });
}

app.get("/", async (req, res) => {
  const data = await getMovieData();
  res.send(data);
});

app.listen(3000, () =>
  console.log(`Hello world app listening on port ${3000}!`)
);
