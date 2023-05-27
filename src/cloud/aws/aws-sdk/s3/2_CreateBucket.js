// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'ap-south-1'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});


// Create the parameters for calling createBucket
var bucketParams = {
    Bucket : process.argv[2]
  };
  

  /*
  You can pass bucket name from command
  node 2_CreateBucket.js BUCKET_NAME*/
//   var bucketParams = {
//     Bucket : process.argv[2]
//   };
var bucketParams = {
    Bucket : "lambda-test-b"
  };


  s3.createBucket(bucketParams, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.Location);
    }
  });