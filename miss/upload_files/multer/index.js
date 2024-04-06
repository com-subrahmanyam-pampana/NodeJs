const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer')

/*Set up storage for uploaded files*/
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.use(cors())



// Set up a route for file uploads
app.post('/upload', upload.array('files[]', 2), (req, res) => {
  // Handle the uploaded file
  res.json({ message: 'File uploaded successfully!' });
});

//   res.json({ message: 'File uploaded successfully!' });
// });
 

const PORT=3001
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})