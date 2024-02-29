const express = require("express");

const app = express();

const port = 3000;


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get('/wait/forever', (req, res) => {
  res.status(200);
})

app.get("/wish", (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send("Good Morning");
});

app.get("/user", (req, res) => {
  res.set('Content-Type', 'application/json');
  const user={
    userName:'Subbu',
    userId:1,
    mobile:"1234567890"
  }
  res.send(user);
});

/*String pattern */
/*This route path will match acd and abcd*/
app.get('/ab?cd', (req, res) => {
  res.send('ab?cd')
})
/*This route path will match abcd, abbcd, abbbcd, and so on. */
app.get('/ab+cd', (req, res) => {
  res.send('ab+cd')
})

/*This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on*/
app.get('/ab*cd', (req, res) => {
  res.send('ab*cd')
})
/*This route path will match anything with an “a” in it. */
app.get('/a/', (req, res) => {
  res.send('/a/')
})

/*Route parameters
named URL segments that are used to capture the values specified 
at their position in the URL
*/
app.get('/user/:userId', (req, res) => {
  let users={
    "1":{
      userName:'Subbu',
      userId:1,
      mobile:"12345"
    },
    "2":{
      userName:'Ravi',
      userId:2,
      mobile:"123456"
    }
  }
  res.set('Content-Type', 'application/json');
  const userid=req.params.userId??1
  res.send(users[userid])
})


app.get('/login/:userId', (req, res) => {
  const loginStatus=true;
  if(req.params.userId==1){
    res.status(200)
    res.send('User')
  }else{
    //status code will be 302
    res.redirect('https://www.google.com');
  }
})
app.get('/redirect/:id', (req, res) => {
  res.status(200);
  res.redirect('https://www.google.com');
  //it will redirect with sttaus code of 302
})

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
