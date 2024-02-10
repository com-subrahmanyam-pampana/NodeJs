

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
  })