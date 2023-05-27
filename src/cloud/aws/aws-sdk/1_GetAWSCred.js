var AWS = require("aws-sdk");

/*
1.Create a "user" in AWS I AM.This gives you the access key and access tokem
2.
In windows add this as user varible in "Environment" varible

AWS_ACCESS_KEY="your access key"
AWS_SECRET_ACCESS_KEY="Your secret "

*/
AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
    console.log("Access key:", AWS.config.credentials.secretAccessKey);
    console.log("Access key:", AWS.config.credentials.expireTime);
    console.log("Region: ", AWS.config.region);
  }
});