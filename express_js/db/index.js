const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testDB",
});

async function getMovieData(resolve) {
  connection.connect();
  connection.query("SELECT  * FROM movies", (err, rows, fields) => {
    if (err) throw err;
    resolve(rows[0]);
  });
  connection.end();
}


async function sleep() {
  let data = await new Promise((resolve) => getMovieData(resolve));
  console.log(data);
}

sleep();
