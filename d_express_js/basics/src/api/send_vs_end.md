res.send() implements res.write, res.setHeaders and res.end:

1.It checks the data you send and sets the correct response headers.
2.Then it streams the data with res.write.
3.Finally, it uses res.end to set the end of the request.


There are some cases in which you will want to do this manually, for example, if you want to stream a file or a large data set. In these cases, you will want to set the headers yourself and use res.write to keep the stream flow.