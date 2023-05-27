// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'ap-south-1'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

  /*
  You can pass bucket name from command
  node 2_CreateBucket.js BUCKET_NAME*/
//   var bucketParams = {
//     Bucket : process.argv[2]
//   };
var bucketParams = {
    Bucket : "lambda-test-b"
  };


// call S3 to retrieve upload file to specified bucket
var uploadParams = {Bucket: 'lambda-test-b', Key: '', Body: ''};
var file = './assets/demo.mp4';

// Configure the file stream and obtain the upload parameters
var fs = require('fs');
var fileStream = fs.createReadStream(file);
fileStream.on('error', function(err) {
  console.log('File Error', err);
});
uploadParams.Body = fileStream;
var path = require('path');
uploadParams.Key = path.basename(file);
  
// call S3 to retrieve upload file to specified bucket
s3.upload (uploadParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } if (data) {
    console.log("Upload Success", data.Location);
  }
});