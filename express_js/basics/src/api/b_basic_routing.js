const express = require("express");

const app = express();

const port = 3000;

/*
Routing refers to determining how an application responds to a client request 
to a particular endpoint, which is a URI (or path) and a specific HTTP 
request method (GET, POST, and so on).

app.METHOD(PATH, HANDLER)
where 
app is an instance of express.
METHOD is an HTTP request method, in lowercase.
PATH is a path on the server.
HANDLER is the function executed when the route is matched.
*/

/* GET method route on root route*/
app.get("/", (req, res) => {
  res.send("Hello World, from express");
});

/* POST request method  on the root route (/)*/
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})
/*Respond to a PUT request to the /user route */
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})


app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
